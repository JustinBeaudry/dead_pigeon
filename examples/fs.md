# TODO:

DP needs a method of deleting messages from the filesystem with privacy concerns being warranted.

Messages are stored using hashing. Each message is hashed using the message itself. This ensures that the message is intact.

Messages are stored in a filesystem setup:

`/fs/{user hash}/{message hash}`

* Each username is hashed to create a user directory
* Each message is hashed and added under both the sender and recipients dir
* When a message is killed it is deleted from both the sender and recipients dir
