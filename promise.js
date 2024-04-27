const database = {
  username: 'avip',
  password: '12345',
  role: 'admin',
  picture: 'profile.png',
  address: 'Bandung',
};

const login = (username, password) => {
  let result = new Promise((resolve, reject) => {
    if (database.username === username && database.password === password) {
      resolve(true);
    } else {
      reject(false);
    }
  });

  return result;
};

const generateToken = () => {
  let result = new Promise((resolve, reject) => {
    if (database.role === 'admin') {
      const token = Math.random().toString(36).substring(2);
      resolve(token);
    } else {
      reject(false);
    }
  });

  return result;
};

const getProfile = () => {
  let result = new Promise((resolve, reject) => {
    resolve(database);
  });

  return result;
};

login('avip', '12345')
  .then((status) => {
    generateToken()
      .then((token) => {
        if (token) {
          getProfile().then((profile) => {
            console.log(profile);
          });
        }
      })
      .catch((status) => {
        console.log('Kamu Bukan Admin');
      });
  })
  .catch((status) => {
    console.log(status);
  });
