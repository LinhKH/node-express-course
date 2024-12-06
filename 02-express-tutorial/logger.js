const logger = (req, res, next) => {
    const { method, url } = req;
    const time = new Date().getFullYear();
    console.log(`[${time}] ${method} ${url}`);
    next();
};

module.exports = logger;