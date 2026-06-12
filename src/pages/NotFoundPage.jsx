import Button from "../components/common/Button";
import Container from "../components/common/Container";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

function NotFoundPage() {
  useDocumentTitle("صفحه یافت نشد | ایرانی فرش");
  
  return (
    <div>
      <Container>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-170 py-20 flex flex-col gap-5 items-center">
            <img
              src="../assets/images/notfound.png"
              alt="notfound"
              className="w-full"
            />
            <Button to='/' tailwindClasses=' border-primary-500 text-primary-500 hover:text-white hover:bg-primary-500'>
              <span className="translate-y-0.75">بازگشت به صفحه اصلی</span>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default NotFoundPage;
