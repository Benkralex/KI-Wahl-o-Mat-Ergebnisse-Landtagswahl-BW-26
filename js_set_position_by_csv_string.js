function inputPosition(inputString, func2) {
    const zahlen = inputString.split(',');
    zahlen.forEach((zahl, index) => {
        tuning_change_position(index, parseInt(zahl, 10));
    });
}
