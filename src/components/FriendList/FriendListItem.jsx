import {
  List,
  Status,
  Image,
  Text,
} from 'components/FriendList/FriendListItem.styled';

export default function FriendListItem({ isOnline, avatar, name }) {
  return (
    <List>
      <Status isOnline={isOnline}></Status>
      <Image src={avatar} alt={name} width="48" />
      <Text>{name}</Text>
    </List>
  );
}
