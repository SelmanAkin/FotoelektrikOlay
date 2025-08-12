module ApplicationHelper
 
  def to_scientific_notation(number)
    return "0" if number.to_f.zero?

    exponent = Math.log10(number).floor
    coefficient = number / (10.0 ** exponent)

    if coefficient.round(1) == 1.0
      "10<sup>#{exponent}</sup>".html_safe
    else
      "#{coefficient.round(2)}×10<sup>#{exponent}</sup>".html_safe
    end
  end
end
