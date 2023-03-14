import {
  Heading,
  Title,
  Value,
  UserApp,
  Container,
  TitleContainer,
} from "./styledComponents";

const UserDetails = (props) => {
  const { userDetails } = props;
  const { id, title, email, name, userId } = userDetails;
  return (
    <UserApp>
      <Heading>User Details</Heading>
      <Container>
        <TitleContainer>
          <Title>Todo Id</Title>
          <Value>{id}</Value>
        </TitleContainer>
        <TitleContainer>
          <Title>Todo Title</Title>
          <Value>{title}</Value>
        </TitleContainer>
        <TitleContainer>
          <Title>User Id</Title>
          <Value>{userId}</Value>
        </TitleContainer>
        <TitleContainer>
          <Title>Name</Title>
          <Value>{name}</Value>
        </TitleContainer>
        <TitleContainer>
          <Title>Email</Title>
          <Value>{email}</Value>
        </TitleContainer>
      </Container>
    </UserApp>
  );
};

export default UserDetails;
