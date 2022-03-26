{
  const useNotification = (title: string, options: NotificationOptions) => {
    if (!("Notification" in window)) return;

    const fireNotification = () => {
      if (Notification.permission !== "granted") {
        Notification.requestPermission().then((permission) => {
          if (permission !== "granted") return;

          new Notification(title, options);
        });
      } else {
        new Notification(title, options);
      }
    };

    return fireNotification;
  };
}
