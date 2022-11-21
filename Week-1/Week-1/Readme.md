# Assignment on HTML

## What is the main functionality of the browser?

#### A Web browser loads files from remote server and displays them to a user. It also allows user interaction.

#### It uses a URI (Uniform Resource Identifier) and sends requests for data(HTML/CSS/JS/XML/JSON and others) to other nodes(server/another computer) in its network and serve received data to the requested user. A browser can request files served by a server in local network (intranet) or the internet.

## High Level Components of a browser?

#### The important high level components of a browser are as follows:

![This is an image](https://raw.githubusercontent.com/pesto-students/sai-karthik-j-sairamin/master/Week-1/how-web-works/images/components.jpg)

1. User Interface: User interface contains the following sub components. address bar, forward/back buttons, bookmarks, window to show content etc.
2. Browser Engine: This works with both rendering engine and user interface to show the final output. To display non-native files like PDF,DOC etc... browser needs plugins/extensions.
3. Rendering Engine: This is responsible for parsing HTML, CSS, scripts etc., and displaying them on screen.
4. Networking: This sends network requests and handles incoming data from other computers (servers) in the network. The URI is translated into an IP address (exact location of the server that hosts the requested resources) by DNS server. Then the request is sent to that server. Port 80 is used by default for unsecure communications. Port 443 is used for secure connections.
5. UI Backend: Used to draw basic widgets like combo boxes and windows that are platform independent.
6. Javascript Interpreter: It parses JS code and executes it.
7. Data Storage: This is where data is stored locally for persistence (Eg. cookies) Browsers support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.
