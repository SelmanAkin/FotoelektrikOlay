require "test_helper"

class AnimationsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get animations_show_url
    assert_response :success
  end
end
