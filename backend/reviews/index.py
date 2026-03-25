"""Получение и добавление отзывов клиентов."""
import json
import os
import psycopg2


def get_conn():
    return psycopg2.connect(os.environ['DATABASE_URL'])


def handler(event: dict, context) -> dict:
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': headers, 'body': ''}

    method = event.get('httpMethod', 'GET')

    if method == 'GET':
        conn = get_conn()
        cur = conn.cursor()
        cur.execute(
            "SELECT id, name, role, text, rating, created_at FROM reviews WHERE approved = TRUE ORDER BY created_at DESC LIMIT 50"
        )
        rows = cur.fetchall()
        cur.close()
        conn.close()
        reviews = [
            {
                'id': r[0],
                'name': r[1],
                'role': r[2] or '',
                'text': r[3],
                'rating': r[4],
                'created_at': r[5].isoformat(),
            }
            for r in rows
        ]
        return {'statusCode': 200, 'headers': headers, 'body': json.dumps({'reviews': reviews})}

    if method == 'POST':
        body = json.loads(event.get('body') or '{}')
        name = (body.get('name') or '').strip()[:100]
        role = (body.get('role') or '').strip()[:150]
        text = (body.get('text') or '').strip()
        rating = int(body.get('rating') or 5)

        if not name or not text:
            return {'statusCode': 400, 'headers': headers, 'body': json.dumps({'error': 'name and text are required'})}

        rating = max(1, min(5, rating))

        conn = get_conn()
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO reviews (name, role, text, rating) VALUES (%s, %s, %s, %s) RETURNING id, name, role, text, rating, created_at",
            (name, role, text, rating)
        )
        row = cur.fetchone()
        conn.commit()
        cur.close()
        conn.close()

        review = {
            'id': row[0],
            'name': row[1],
            'role': row[2] or '',
            'text': row[3],
            'rating': row[4],
            'created_at': row[5].isoformat(),
        }
        return {'statusCode': 200, 'headers': headers, 'body': json.dumps({'review': review})}

    return {'statusCode': 405, 'headers': headers, 'body': json.dumps({'error': 'Method not allowed'})}
