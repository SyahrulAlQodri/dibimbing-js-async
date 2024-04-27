const database = {
  username: 'avip',
  password: '12345',
  picture: 'profile.png',
  address: 'Bandung',
};

const login = (username, password, callback) => {
  setTimeout(() => {
    if (database.username === username && database.password === password) {
      callback(true);
    } else {
      callback(false);
    }
  }, 1000);
};

const generateToken = (callback) => {
  setTimeout(() => {
    const token = Math.random().toString(36).substring(2);
    callback(token);
  }, 1000);
};

const getProfile = (token, callback) => {
  if (token) {
    callback(database);
  }
};

login('avip', '12345', (status) => {
  if (status) {
    generateToken((token) => {
      getProfile(token, (profile) => {
        console.log(profile);
      });
    });
  } else {
    console.log('login failed');
  }
});
