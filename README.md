# notification.js
A simple tool for creating and displaying notifications on a website.
The tool only uses native JavaScript and does not need any additional Scripts to work.

## Setup
Include the stylesheet and the Script into your page like so

```HTML
<link rel="stylesheet" href="css/notification.css" />

<script src="js/notification.js"></script>
```

The script will automatically create a new DOM element for the notifications `#notificationBox`.
No further steps are needed to use the tool.

## Display a notification
To display a notification you need to create a new Object of the notification class.
The constructor takes 3 parameters and could look like this

```javascript
new notification('test', null, 15000);
```

This will display a default notification with the text "test" for 15 seconds.

### Parameter list
Parameter|Type|is required|
-|-|-
text|string|required
type|string|optional
lifetime|int|optional (default: 5000)

### Notification types
The type of a notification is handled by a css class.

To add your own type just define a class in your stylesheet like this
```css
#notificationBox > .notification.YOURCLASSNAME {
  /* - your css - */
}
```

#### Predefined classes 
* error
