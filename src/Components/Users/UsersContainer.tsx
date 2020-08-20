import { connect } from 'react-redux';
import Users from './Users';
import { StateType, ActionsType } from '../../Redux/state';
import { followActionCreator, unFollowActionCreator, UserType1, setUsersActionCreator } from '../../Redux/users-reducer';

let mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        follow: (userdId: number) => {
            dispatch(followActionCreator(userdId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowActionCreator(userId))
        },
        setUsers: (users: Array<UserType1>) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)