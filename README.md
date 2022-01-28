# Graphql
Graphql에서는 아래와 같이 한 쿼리에 여러 정보를 받을 수 있다. 그래서 under-query와 over-query인 경우를 줄일 수 있다.
```Graphql
query GetMovies {
        movie{
            id
            title
        }
        user{
            username
            profilepic
        }        
    }
```
위와 같이 서버에 요청하면 아래와 같이 자바스크립트 객체로 가져오게 될 것이다.

```javascript
{
    movie: {
        id: 1,
        title: 'Spider Man'
    },
    user: {
        username: 'mjroh',
        profilepic: '/img/mjrohPhoto.png'
    }
}
```