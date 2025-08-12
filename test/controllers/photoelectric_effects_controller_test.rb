require "test_helper"

class PhotoelectricEffectsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get photoelectric_effects_new_url
    assert_response :success
  end

  test "should get create" do
    get photoelectric_effects_create_url
    assert_response :success
  end

  test "should get index" do
    get photoelectric_effects_index_url
    assert_response :success
  end
end
