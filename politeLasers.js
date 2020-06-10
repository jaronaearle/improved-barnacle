const getLaserSetting = (status) => {
    return status === 'please' ? 'OFF' : 'ON';
}

getLaserSetting(process.argv[2]);