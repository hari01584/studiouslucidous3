# How to contribute (or add more subjects)

There are some helpers and tools i made to easify your process of adding more projects!!

First of all fork **[this parent repository](https://github.com/hari01584/studymap)** and look into **unit.json** file, that file has all the data required to build the subjects and the collapse-able listview! Following the usual syntax of the json file, you can add more subjects and their contents!

Not only that but you can also take a look into *helper/line.py*, I used this script to quickly make copy-paste able js syntax dictionary codes, So i can save little bit of time adding semicolons and quotes again and again :)..!

## Edit unit.js
Find **unit.js** in **build** directory and edit it, add more subjects and data, Additionally here's the recommended format of doing it.
```json
[
	{
		"subject": "SUBCODE (SUBNAME)",
		"content": {
			"Section1": "Content 1",
			"Section2": "Content 2"
		}
	}
]
```
## Build new content.md

cd to the *build* directory and run this node command to build content.md!
```bash
node encoder.js
```

## Copy content.md data to README.md

If successful then you should copy paste all the content in *build/content.md* to appropriate place in *README.md* and make PR! Ty!!


*Enjoy*
