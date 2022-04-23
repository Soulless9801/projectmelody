const pwds = [
    "pmelody",
    "siteadmin"
]

const hashes = [
    "f49cf22b3ba799a9522f54a5a6a83c75287220a2e88f1c826f19c0ad3aba5033",
    "4b4d84a924bee4381c8cba1badfe3aa96cd7746ec02e36f862fab18caf42dafc"
]


async function hash(string) {
    const utf8 = new TextEncoder().encode(string);
    const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((bytes) => bytes.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  }

function genhash() {
    for (var i = 0; i < pwds.length; i++) {
        var hashresults = hash(pwds[i]).then((hex) => {console.log(hex)});
        console.log(hashresults);
    }
}


async function check(password) {
    pswdhash = await hash(password);
    await console.log(hash(password));
    if ( hashes.includes(pswdhash)) {
        return true;
    }
    else {
        return false;
    }
}

