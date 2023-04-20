import openai
import key
# api key
openai.api_key = key.API_KEY

# Set up the model and prompt
model = 'text-davinci-003'


def OPENAI(prompt):
    # Generate a response
    completion = openai.Completion.create(
        engine=model,
        prompt=prompt,
        max_tokens=1024,
        n=1,
        stop=None,
        temperature=0.5,
    )
    response = completion.choices[0].text
    return response



