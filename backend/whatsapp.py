from configs import config

phone_number_id = config.get("phone_number_id")  # Phone number ID provided
access_token = config.get("WHATSAPP_ACCESS_TOKEN")  # Your temporary access token
recipient_phone_number = config.get("recipient_phone_number")  # Your own phone number

url = f"https://graph.facebook.com/v17.0/{phone_number_id}/messages"
headers = {
    "Authorization": f"Bearer {access_token}",
    "Content-Type": "application/json",
}

data = {
    "messaging_product": "whatsapp",
    "to": recipient_phone_number,
    "type": "text",
    "text": {"body": "Damn it woon."},
}


data = {
    "messaging_product": "whatsapp",
    "to": recipient_phone_number,
    "type": "interactive",
    "interactive": {
        "type": "button",
        "header": {
            "type": "text",
            "text": "John Pizza",
        },
        "body": {
            "text": "Hello I'm John Pizza",
        },
        "action": {
            "buttons": [
                {
                    "type": "reply",
                    "reply": {
                        "title": "Reply Me",
                        "id": "My ID",
                    },
                }
            ]
        },
    },
}

import json

import requests


def send_message():
    requests.post(url, headers=headers, data=json.dumps(data))
