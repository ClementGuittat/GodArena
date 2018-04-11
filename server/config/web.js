module.exports = {
    /**
     * Port where the http web server will listen
     */
    port: process.env.PORT || 3000,

    /**
     * Accept only connection on hostname.
     *
     * If omitted, the server will serve all interfaces
     *
     * @example 'localhost'
     * @default undefined
     */
    hostname: process.env.HOSTNAME || 'localhost',
};
