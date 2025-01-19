import styled from "styled-components";
import { Image } from "antd";
import LoginLayout from "../../components/views/LoginLayout/LoginLayout";

// Styled components
const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
  }
  background-color: #f3f4f6;
`;

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #156a8c;
  padding: 2rem;
`;

const RightSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 24rem;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const StyledImage = styled(Image)`
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

export default function Login() {
  return (
    <PageWrapper>
      {/* Left side - Image */}
      <LeftSide>
        <ContentWrapper>
          <StyledImage
            src="https://storage.googleapis.com/anydone-static-files/assets/workflow/new_create_workspace.svg"
            alt="IELTS Study"
            width={400}
            height={400}
          />
        </ContentWrapper>
      </LeftSide>

      {/* Right side - Login Form */}
      <RightSide>
        <ContentWrapper>
          <Title>IELTS Mock Test Portal</Title>
          <LoginLayout />
        </ContentWrapper>
      </RightSide>
    </PageWrapper>
  );
}
