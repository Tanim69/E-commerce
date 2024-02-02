function emailVerificationTemplate(token){


return `<div><img alt=""src=https://i.ibb.co/YZc7SwS/logo.png style=width:100px><h1 style=font-family:DM-Sans,sans-serif>OREBI ECOMMERCE</h1><p style=font-family:DM-Sans,sans-serif>Please Verify Your Email Address</p> ${token}<button style=background:#00ff0d;padding:20px;border:none>CLICK FOR VERIFICATION</button></div>`


}

module.exports = emailVerificationTemplate;