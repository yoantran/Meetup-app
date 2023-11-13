const DUMMIE_DATA = [
  {
    id: 'm1',
    title: 'Fan Meetup',
    image:
        'https://pbs.twimg.com/media/FXUkg5AaMAAFjjB?format=jpg&name=4096x4096',
    address: 'No. 599, Wangshang Road, Binjiang District, Hangzhou.',
    description:
        'This is an amazing meetup which you definitely should not miss for the fun. It will be a chitchat over your favorite character\'s bbirthday!',
  },
  {
    id: 'm2',
    title: 'Commission Meetup',
    image:
        'https://pbs.twimg.com/media/FMXF_tgaMAAFPR2?format=jpg&name=4096x4096',
    address: 'San Francisco, Market Square, 1355 Market St #900, San Francisco, United States',
    description:
        'This is an opportunity hard to miss. It will be a chance to take on a great commission deal.',
  },
];

function AllMeetupsPage() {
  return (
      <section>
      <h1>All Meetups</h1>
        <ul>
          {DUMMIE_DATA.map((meetup) => {
            return <li key={meetup.id}>{meetup.title}</li>
              })}
        </ul>
      </section>);
}

export default AllMeetupsPage;
