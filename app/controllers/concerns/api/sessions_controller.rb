class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(user_params)
    if @user
      log_in!(@user)
      render "api/users/show"
    else
      render json: { auth: ["Invalid username/password"] }, status: 422
    end
  end

  def show
    @user = current_user
    if @user
      render "api/users/show"
    else
      render json: nil
    end
  end

  def destroy
    @user = current_user
    log_out!
    render "api/users/show"
  end

end

## AJAX requests for testing from browser console
# $.ajax({
#   url: '/api/users',
#   method: 'POST',
#   data: {
#     user: {
#       username: 'mike',
#       password: 'starwars'
#     }
#   }
# }).then(data => console.log(data));
#
# $.ajax({
#   url: '/api/session',
#   method: 'GET',
# }).then(data => console.log(data));
#
# $.ajax({
#   url: '/api/session',
#   method: 'DELETE'
# }).then(data => console.log(data));
#
# $.ajax({
#   url: '/api/session',
#   method: 'POST',
#   data: {
#     user: {
#       username: 'mike',
#       password: 'starwars'
#     }
#   }
# }).then(data => console.log(data));
