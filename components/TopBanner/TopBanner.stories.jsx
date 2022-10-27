import TopBanner from ".";


export default {
   title: 'TopBanner',
   component: TopBanner,
};

const Template = (args) => <TopBanner {...args} />;

export const Default = Template.bind({});

Default.args = {
   text: "1234 BCIT Street",
   back: true
};