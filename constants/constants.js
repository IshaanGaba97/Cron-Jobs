//Constants.js file will contain the constants 
module.exports = {
    // endpoint 
    GENERATE_TOKEN_ENDPOINT: "/generate-token",
    CHECK_TOKEN_ENDPOINT: "/check-token",

    // response messages
    TOKEN_VALIDATED: "Success! The Token is valid. Authorization Successful",

    // Error messages for file operations
    TOKEN_NOT_PROVIDED: "Unauthorized - Token not provided",
    TOKEN_NOT_VALID: "Unauthorized - Token not valid",
    INTERNAL_SERVER_ERROR: "Internal Server Error",
}
