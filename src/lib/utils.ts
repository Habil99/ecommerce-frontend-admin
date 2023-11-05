import { Theme } from "@mui/material";

function stringToColor(string: string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgColor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const fadeInMixin = (theme: Theme) => ({
  transition: theme.transitions.create(["opacity", "visibility"], {
    duration: theme.transitions.duration.complex,
  }),
  opacity: 1,
  visibility: "visible",
});

const fadeOutMixin = (theme: Theme) => ({
  transition: theme.transitions.create(["opacity", "visibility"], {
    duration: theme.transitions.duration.complex,
  }),
  opacity: 0,
  visibility: "hidden",
});

const fadeMixin = (condition: boolean, theme: Theme) => ({
  ...(condition ? fadeInMixin(theme) : fadeOutMixin(theme)),
});

const uuid = ({
  length = 8,
  prefix = "",
  suffix = "",
  type = "alphanumeric",
}: {
  length?: number;
  prefix?: string;
  suffix?: string;
  type?: "alphanumeric" | "numeric" | "alphabetic";
} = {}) => {
  // do not use math.random() for security reasons
  const numericUnicodeRange = [48, 57];
  const alphaUnicodeRange = [65, 90];
  const alphaNumericUnicodeRange = [
    ...numericUnicodeRange,
    ...alphaUnicodeRange,
  ];
  const ranges = {
    alphanumeric: alphaNumericUnicodeRange,
    numeric: numericUnicodeRange,
    alphabetic: alphaUnicodeRange,
  };
  const chars = [];
  const max = ranges[type][1] - ranges[type][0];
  for (let i = 0; i < length; i++) {
    chars.push(
      String.fromCharCode(ranges[type][0] + Math.floor(Math.random() * max))
    );
  }
  return `${prefix}${chars.join("")}${suffix}`;
};

export {
  stringAvatar,
  stringToColor,
  fadeInMixin,
  fadeOutMixin,
  fadeMixin,
  uuid,
};
