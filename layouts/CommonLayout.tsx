import MainNavbar from '@/components/common/Navbar'
import BottomSearchBar from '@/components/common/BottomSearchbar'
import { GlobalFooter } from '@/components/common/GlobalFooter'

const CommonLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <MainNavbar/>
    {children}
    <BottomSearchBar/>
    <GlobalFooter/>
    </>
  )
}

export default CommonLayout