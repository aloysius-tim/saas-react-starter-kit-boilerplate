
# Welcome to AdonisJS JWT + VueJS App

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

0. VueJS
1. Bodyparser
2. Authentication
	-    authorise,
	-    signup,
	-    verify email,
	-    forgot password,
	-    resend email verification,
	-   refresh token,
	-    me (current user info except password),
	-    my tokens (current user's auth tokens)
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new starter --blueprint=amitkhare/adonis-api-starter
```

or manually clone the repo and then run `npm install`.


### Configs
- Setup database configs in `ROOT/.env`
- Setup Mail server config in `ROOT/.env`
- *[optional]* Set `APP_SUPERADMIN_EMAIL` in `ROOT/.env` *[ This will ensure bypass email varification for this email address.]*

> Feel free to change `ROOT/.env` PORT, APP_* or any other variable according to your needs.


### VueJS
Run the following commands to build vuejs app.
```bash
    $ cd vue-spa
    $ npm run build
```
### Migrations
Run the following command to run startup migrations.

```js
adonis migration:run
```

### Run
```js
adonis serve --dev
```

# AUTH API Endpoints

## Endpoints with JSON response

| method   | endpoint | request   | response   | needs auth   |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| POST  | /api/auth/authorise  |  [email, password] |  jwt and refresh token  | no  |
| POST  | /api/auth/signup  |  [username, email, password] |  jwt and refresh token  | no  |
| GET  | /api/auth/revoke/token  |  { refreshToken=< TOKEN >, isRevokeAll=true/false, isRemove=true/false } |  message  | yes |
| POST  | /api/auth/resend/email/verification/code  |  [email] |  message  | no  |
| POST |  /api/auth/forgot/password | [email] |  message/ sends email  | no  |
| POST |  /api/auth/reset/password | [token, password] |  message  | no  |
| POST |  /api/auth/refresh/token | [refresh_token] |  jwt and new refresh token   | no  |
| POST |  /api/auth/update/password | [password, newPassword] |  message  | yes  |
| POST |  /api/auth/update/email | [password, email] |  message  | yes  |
| POST |  /api/auth/assign/role | [userId, role] |  message  | yes (Super Admin)  |
| POST |  /api/auth/remove/user/:id | [id] |  message  | yes (Super Admin)  |
| GET |  /api/auth/users  |  ?page=1 (query param) |  paginated users list  | yes (Manager Level)  |
| GET |  /api/auth/toggle/user/ban/:id  |  [id] | message | yes (Super Admin)  |
| GET |  /api/auth/confirm/email/:token  |  token (as param) |  message  | no  |
| GET |  /api/auth/me | NONE |  Current User Info except password   | yes  |
| GET |  /api/auth/my/tokens | NONE |  Current User Tokens   | yes  |

## Endpoints with HTML View

| method   | endpoint | request   | response   | needs auth   |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| GET |  /api/auth/view/confirm/email/:token | NONE |  HTML View   | no  |
| GET |  /api/auth/view/reset/password/:token | NONE |  HTML View   | no  |

# PROFILE API Endpoints

## Endpoints with JSON response

| method   | endpoint | request   | response   | needs auth   |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| GET |  /api/profile  |  NONE |  user profile  | yes  |
| POST |  /api/profile/update  |  [first_name, last_name] |  message  | yes(verified)  |
| POST |  /api/profile/update/avatar  |  file[avatar] |  message  | yes(verified)  |

# LOG API Endpoints

## Endpoints with JSON response

| method   | endpoint | request   | response   | needs auth   |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| GET |  /api/logs  |  ?page=1 (query param) |  Paginated Logs  | yes  |
| GET |  /api/logs/remove/:id  |  id (as param) |  message (remove log by id)  | yes [admin level]  |
| GET |  /api/logs/clear/all  |  NONE | message (clears all logs)  | yes [admin level]  |


# FEATURES/ TODO
## AUTH endpoint
- [x] Authorise
- [x] Signup
- [x] revokeToken
- [x] Forgot Password
- [x] Verify Email
- [x] Resend Email
- [x] Refresh Token
- [x] List User Tokens
- [x] Level Based Restriction middleware
  - [x] `jwtAuth` (All authenticated users)
  - [x] `JwtAuthVerified` (Only verified users)
  - [x] `jwtAuthMember` (Member level and followings )
  - [x] `jwtAuthModerator` (Moderator level and followings )
  - [x] `jwtAuthManager` (Manager level and followings )
  - [x] `jwtAuthAdmin` (Admin and Super Admin only)
  - [x] `jwtAuthSuperAdmin` (Super Admin only)
- [x] User Details (except password)
- [x] Update Email
- [x] Update Password
- [x] Assign auth level to user
- [x] List Users
- [x] Remove User
- [x] Toggle User Ban

## PROFILE endpoint
- [x] Profile
- [x] Update Profile
- [x] Auto fetch avatar during user signup (with email)
- [x] Update Avatar