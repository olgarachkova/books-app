import { StartPage } from 'components/StartPage'
import { BookPageContainer } from 'containers/BookPageContainer'
import { SearchPageContainer } from 'containers/SearchPageContainer'
import { NoFoundPage } from 'components/NoFoundPage'
import { Error } from 'components/Error'

export const myroutes = [
    {
        path: '/',
        exact: true,
        component: StartPage
    },
    {
        path: '/book/:bookID',
        exact: true,
        component: BookPageContainer
    },
    {
        path: '/search',
        exact: true,
        component: SearchPageContainer
    },
    {
        path: '/error',
        exact: true,
        component: Error
    },
    {
        path: '/',
        component: NoFoundPage
    }
]