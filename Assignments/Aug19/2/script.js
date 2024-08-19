function showNotification() {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      var notification = new Notification("Hello Welcome", {
        body: "Welcome to Notification API",
      });
      setTimeout(() => {
        notification.close();
      }, 5000);
    } else {
      console.log("Permission denied");
    }
  });
}
