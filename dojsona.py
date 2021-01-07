{
    "jokes": [
#     {
#         "id": 1,
#         "question": "Jaki jest ulubiony horror frontendowców?",
#         "answer": "Freddy kontra JSON"
#     },
    ]
}


questions = []
answers = []
jokes = []
id = 1


with open("suchary_sorted.txt", "r") as fp:
    lines = fp.readlines()
    for line in lines:
        sucharek = line.split(';')
        question = sucharek[0]
        question = question[0].upper() + (question[1:])
        answer = (sucharek[1].replace('\n', ''))
        such = f'"id":{id},"question": "{str(question).strip()}", "answer": "{str(answer).strip()}"'


        if (id!= len(lines)):
            such = '{'+such+'},'
        else:
            such = '{'+such+'}'

        jokes.append(such)
        # print(such)
        id = id + 1

with open("suchary_json.json", "w") as fp:
    fp.write('{"jokes": [')
    for joke in jokes:
        fp.write(joke)
    fp.write(']}')


# print(questions)
# print(answers)