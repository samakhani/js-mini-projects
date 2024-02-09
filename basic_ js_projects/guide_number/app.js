const GuideNumber = (n) => {
    return n
        .split(" ")
        .filter((value, index) => value % 6 == 0 && (index + 1) % 6 == 0)
        .join(" ");
};
