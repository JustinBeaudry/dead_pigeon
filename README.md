# dead pigeon

anonymous peer-to-peer communication

## Ideas

* messages have a 24 hour life
* Each user has a unique url
* the url is a shortened url that redirects to the user url
* physical transportation by encrypted usb
* encrypted usb with random word generated passwords
* usb contains shortened user url
* each user their own database?
* URL's are hashes
* TOR Hidden Service
* eCurrency side-chain, using various eCurrencies (bitcoin, litecoin, dogecoin)
* Messages are routed from user to user
* peer-to-peer (cryptosphere?)

## Storage

Dead Pigeon uses no database but uses a file sytem structure (non-POSIX) that enables the storage of messages, passwords in a unique system.

				/fs/{user_hash}/{msg_hash}

Dead Pigeon also uses a hashing system to store all information. This is how information is not only verified to see if any unauthorized changes are made but also is kept safe.

To check for a user Dead Pigeon need only look in `/fs` for any user hash. If the provided username' digest matches the digest of any hashes in the folder than a user exists.

## Retrieving messages Security

Dead Pigeon requires a user to generate a secure passcode using a file and a secret passcode. The file's binaries and the passphrase are used to generate a secret pass for authentication. This secret pass is stored in the users folder. The `/fs` dir is not accessible except by the unix user that the node process is assigned to.

## Components

* URI Shortener
* User Management - automated management
* Access Management
* Proxy Services
* Message Management - messages have a life, Max and Min lives for messages in config

## Caveats

`dead pigeon` is a proof-of-concept of ecnrypted anonymous communication with a a probably prime perspective of 7 years. This should be customizable.
