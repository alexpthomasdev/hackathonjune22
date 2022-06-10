const messages = [
  {
    "id": "62a31ace270ca7b26191aace",
    "vote": 1,
    "text": "Est commodo veniam officia commodo fugiat labore amet reprehenderit deserunt voluptate cillum mollit elit eu.",
    "onlyManager": true,
    "date": "2021-06-07T06:19:51.183Z"
  },
  {
    "id": "62a31acefe63e21249e85e5d",
    "vote": 4,
    "text": "Commodo est aliqua dolor commodo ad aliquip proident ut.",
    "onlyManager": true,
    "date": "2021-06-04T17:40:58.899Z"
  },
  {
    "id": "62a31ace11bc311240d4f728",
    "vote": 5,
    "text": "Aliquip cupidatat cupidatat laboris deserunt incididunt.",
    "onlyManager": false,
    "date": "2021-06-08T13:11:55.436Z"
  },
  {
    "id": "62a31ace98a46ee5bbc8920a",
    "vote": 3,
    "text": "Reprehenderit quis exercitation eiusmod enim tempor dolor exercitation mollit.",
    "onlyManager": true,
    "date": "2021-06-10T19:51:38.481Z"
  },
  {
    "id": "62a31ace16e3feec3a330c36",
    "vote": 2,
    "text": "Anim cupidatat cupidatat mollit sunt dolor.",
    "onlyManager": false,
    "date": "2021-06-08T13:36:55.028Z"
  },
  {
    "id": "62a31ace076f30babad95d4d",
    "vote": 2,
    "text": "Exercitation est aliquip ullamco cupidatat occaecat.",
    "onlyManager": false,
    "date": "2021-06-06T03:53:02.670Z"
  },
  {
    "id": "62a31ace6e588ca29ba36d25",
    "vote": 4,
    "text": "Sunt Lorem magna do adipisicing sunt eiusmod tempor proident anim.",
    "onlyManager": true,
    "date": "2021-06-04T18:08:26.377Z"
  },
  {
    "id": "62a31acee50cb2bfcb6f727c",
    "vote": 5,
    "text": "Sit id proident sit duis minim aliqua deserunt excepteur laborum nostrud anim officia officia.",
    "onlyManager": false,
    "date": "2021-06-10T10:53:00.795Z"
  },
  {
    "id": "62a31aceaefa03e2044b3d6f",
    "vote": 2,
    "text": "Pariatur sint eiusmod commodo sit est occaecat consectetur ullamco non consectetur dolore do deserunt ea.",
    "onlyManager": false,
    "date": "2021-06-01T21:43:00.446Z"
  },
  {
    "id": "62a31ace14520479c1ea33ff",
    "vote": 4,
    "text": "Exercitation excepteur enim et velit ea ad non tempor.",
    "onlyManager": true,
    "date": "2021-06-10T18:02:49.482Z"
  },
  {
    "id": "62a31acee4dce44e0a6eda6b",
    "vote": 2,
    "text": "Magna sunt deserunt in nostrud cillum in reprehenderit deserunt.",
    "onlyManager": false,
    "date": "2021-06-07T09:15:52.157Z"
  },
  {
    "id": "62a31acedfea6a5b647daa84",
    "vote": 4,
    "text": "Nulla culpa ullamco culpa anim pariatur laborum incididunt excepteur cillum nulla velit aliquip proident ipsum.",
    "onlyManager": true,
    "date": "2021-06-03T04:11:22.562Z"
  },
  {
    "id": "62a31ace0c75795fe6d6f28d",
    "vote": 3,
    "text": "Veniam officia laborum eu duis dolore est elit aliquip magna et officia voluptate pariatur.",
    "onlyManager": true,
    "date": "2021-06-10T18:59:47.501Z"
  },
  {
    "id": "62a31ace226e4a41b6966a08",
    "vote": 5,
    "text": "Amet commodo nulla tempor laboris irure in in pariatur labore esse id do.",
    "onlyManager": true,
    "date": "2021-06-02T08:56:27.026Z"
  },
  {
    "id": "62a31ace2b9b865633c38a19",
    "vote": 1,
    "text": "Quis id dolor qui sunt labore ullamco officia anim ea officia id cupidatat enim.",
    "onlyManager": true,
    "date": "2021-06-04T16:54:10.436Z"
  },
  {
    "id": "62a31acea287130626103e93",
    "vote": 3,
    "text": "Commodo esse est ipsum laboris sit eu tempor culpa pariatur occaecat Lorem.",
    "onlyManager": true,
    "date": "2021-06-08T00:22:04.999Z"
  },
  {
    "id": "62a31ace3473b9cfea4cde69",
    "vote": 1,
    "text": "Ea fugiat laboris ipsum anim qui aute non laboris duis excepteur qui.",
    "onlyManager": true,
    "date": "2021-06-09T08:09:43.934Z"
  },
  {
    "id": "62a31ace1f97adec335fce0b",
    "vote": 3,
    "text": "Laborum aute tempor exercitation deserunt pariatur non minim ut.",
    "onlyManager": true,
    "date": "2021-06-09T08:16:24.628Z"
  },
  {
    "id": "62a31ace4e9278e98abcf771",
    "vote": 3,
    "text": "Magna veniam irure adipisicing laboris exercitation.",
    "onlyManager": true,
    "date": "2021-06-01T17:56:20.871Z"
  },
  {
    "id": "62a31aceb7dfdf8a1e83de1a",
    "vote": 2,
    "text": "Elit voluptate ex culpa et anim veniam.",
    "onlyManager": true,
    "date": "2021-06-08T07:37:24.952Z"
  },
  {
    "id": "62a31ace5b6ea67190f28a92",
    "vote": 5,
    "text": "Est consequat ad exercitation deserunt labore excepteur pariatur.",
    "onlyManager": false,
    "date": "2021-06-02T05:41:56.467Z"
  },
  {
    "id": "62a31ace285f553fe31bb6a5",
    "vote": 1,
    "text": "Reprehenderit aliqua ea laboris nisi tempor eu.",
    "onlyManager": false,
    "date": "2021-06-07T06:41:34.389Z"
  },
  {
    "id": "62a31ace2edb07a4bb5f40f4",
    "vote": 5,
    "text": "Aute nostrud adipisicing nulla fugiat et.",
    "onlyManager": false,
    "date": "2021-06-01T05:03:46.490Z"
  }
]

export default messages