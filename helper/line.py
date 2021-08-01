print("Enter as many lines of text as you want.")
print("When you're done, enter a single period on a line by itself.")

while(1):
    buffer = []
    while True:
        print("> ", end="")
        line = input()
        buffer.append(line)
        if "." in line:
            break
    content = "\n".join(buffer).replace('\n', ' ')

    print("Result...")
    print()

    x = content.split(': ', 1)

    print('"'+x[0]+'":"'+x[1]+'",\n')
