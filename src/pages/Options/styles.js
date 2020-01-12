import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Profile = styled.View`
  height: 100%;
  padding: 20px 10px;
  justify-content: center;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  height: 100px;
  width: 100px;
  margin-bottom: 20px;
  border-radius: 50px;
  background: #eee;
`;

export const ProfileName = styled(Input)`
  margin-bottom: 15px;
`;

export const ButtonLogout = styled(Button)`
  background: #a82e16;
  align-self: stretch;
`;
