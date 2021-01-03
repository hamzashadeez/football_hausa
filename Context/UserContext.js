import React, {useState} from 'react';

const UserContext = React.createContext([{}, () => {}]);

const UserProvider = (props) => {
  const [state, setState] = useState({
    username: '',
    email: '',
    uid: '',
    isSigned: true,
    profilePhotoURL: '',
    following: 0,
    followers: 0,
    posts: 0,
    story: []
  });

  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  );
};

export {UserContext, UserProvider};