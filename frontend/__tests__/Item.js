import ItemComponent from "../components/Item";
import { shallow } from "enzyme";

const fakeItem = {
  id: "ABC123",
  title: "Acool Item",
  price: 200,
  decription: "this is dog",
  image: "dog.jpg",
  largeImage: "largedImage.jpg"
};

describe("<Item />", () => {
    it('renders and matches the snapshot', () => {
        const price = '$50.34';
        expect(price).toMatchInlineSnapshot();
    })
//   it("renders and image  properly", () => {
//     const wrapper = shallow(<ItemComponent item={fakeItem} />);

//     const img = wrapper.find("img");
//     expect(img.props().src).toBe(fakeItem.image);
//     expect(img.props().alt).toBe(fakeItem.title);
//   });

//   it("renders and price tag properly", () => {
//     const wrapper = shallow(<ItemComponent item={fakeItem} />);
//     const priceTag = wrapper.find("PriceTag");
//     console.log(priceTag.children());
//     expect(priceTag.children().text()).toBe("$2");
//     // console.log(wrapper.debug())
//     expect(wrapper.find("Title a").text()).toBe(fakeItem.title);
//   });
//   it("renders and image  properly", () => {
//     const wrapper = shallow(<ItemComponent item={fakeItem} />);
//     const buttonList = wrapper.find('.buttonList');
//     expect(buttonList.children()).toHaveLength(3);
//     expect(buttonList.find('Link')).toHaveLength(1);
//     expect(buttonList.find('AddToCart').exists()).toBe(true);
//     expect(buttonList.find('DeleteItem').exists()).toBe(true);

//     console.log(buttonList.children())
//   })
});
