const DAY_MILLISECONDS = 24 * 60 * 60 * 1000;

export const get = (name) => {
  const cookies = decodeURIComponent(document.cookie)
    .split(";")
    .map((c) => c.trim());

  for (const cookie of cookies) {
    if (cookie.startsWith(name)) {
      return cookie.split("=")[1];
    }
  }

  return null;
};

export const set = (name, value, expiresInDays = 30) => {
  var d = new Date();
  d.setTime(d.getTime() + expiresInDays * DAY_MILLISECONDS);
  var expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
};

export const clear = () => {
  document.cookie = "";
};
