import rocketImg from '../src/assets/rocket_placeholder.jpg';
import { LaunchFull } from '../src/models/launch.model';

export const launches: LaunchFull[] = [
  {
    fairings: {
      reused: false,
      recovery_attempt: false,
      recovered: false,
      ships: [],
    },
    links: {
      patch: {
        small: 'https://images2.imgbox.com/94/f2/NN6Ph45r_o.png',
        large: 'https://images2.imgbox.com/5b/02/QcxHUb5V_o.png',
      },
      reddit: {
        campaign: null,
        launch: null,
        media: null,
        recovery: null,
      },
      flickr: {
        small: [],
        original: [],
      },
      presskit: null,
      webcast: 'https://www.youtube.com/watch?v=0a_00nJ_Y88',
      youtube_id: '0a_00nJ_Y88',
      article: 'https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html',
      wikipedia: 'https://en.wikipedia.org/wiki/DemoSat',
    },
    static_fire_date_utc: '2006-03-17T00:00:00.000Z',
    static_fire_date_unix: 1142553600,
    net: false,
    window: 0,
    rocket: '5e9d0d95eda69955f709d1eb',
    success: false,
    failures: [
      {
        time: 33,
        altitude: null,
        reason: 'merlin engine failure',
      },
    ],
    details: 'Engine failure at 33 seconds and loss of vehicle',
    crew: [],
    ships: [],
    capsules: [],
    payloads: ['5eb0e4b5b6c3bb0006eeb1e1'],
    launchpad: '5e9e4502f5090995de566f86',
    flight_number: 1,
    name: 'FalconSat',
    date_utc: '2006-03-24T22:30:00.000Z',
    date_unix: 1143239400,
    date_local: '2006-03-25T10:30:00+12:00',
    date_precision: 'hour',
    upcoming: false,
    cores: [
      {
        core: '5e9e289df35918033d3b2623',
        flight: 1,
        gridfins: false,
        legs: false,
        reused: false,
        landing_attempt: false,
        landing_success: null,
        landing_type: null,
        landpad: null,
      },
    ],
    auto_update: true,
    tbd: false,
    launch_library_id: null,
    id: '5eb87cd9ffd86e000604b32a',
  },
  {
    fairings: {
      reused: false,
      recovery_attempt: false,
      recovered: false,
      ships: [],
    },
    links: {
      patch: {
        small: 'https://images2.imgbox.com/f9/4a/ZboXReNb_o.png',
        large: 'https://images2.imgbox.com/80/a2/bkWotCIS_o.png',
      },
      reddit: {
        campaign: null,
        launch: null,
        media: null,
        recovery: null,
      },
      flickr: {
        small: [],
        original: [rocketImg],
      },
      presskit: null,
      webcast: 'https://www.youtube.com/watch?v=Lk4zQ2wP-Nc',
      youtube_id: 'Lk4zQ2wP-Nc',
      article: 'https://www.space.com/3590-spacex-falcon-1-rocket-fails-reach-orbit.html',
      wikipedia: 'https://en.wikipedia.org/wiki/DemoSat',
    },
    static_fire_date_utc: null,
    static_fire_date_unix: null,
    net: false,
    window: 0,
    rocket: '5e9d0d95eda69955f709d1eb',
    success: false,
    failures: [
      {
        time: 301,
        altitude: 289,
        reason: 'harmonic oscillation leading to premature engine shutdown',
      },
    ],
    details:
      'Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage',
    crew: [],
    ships: [],
    capsules: [],
    payloads: ['5eb0e4b6b6c3bb0006eeb1e2'],
    launchpad: '5e9e4502f5090995de566f86',
    flight_number: 2,
    name: 'DemoSat',
    date_utc: '2007-03-21T01:10:00.000Z',
    date_unix: 1174439400,
    date_local: '2007-03-21T13:10:00+12:00',
    date_precision: 'hour',
    upcoming: false,
    cores: [
      {
        core: '5e9e289ef35918416a3b2624',
        flight: 1,
        gridfins: false,
        legs: false,
        reused: false,
        landing_attempt: false,
        landing_success: null,
        landing_type: null,
        landpad: null,
      },
    ],
    auto_update: true,
    tbd: false,
    launch_library_id: null,
    id: '5eb87cdaffd86e000604b32b',
  },
  {
    fairings: {
      reused: false,
      recovery_attempt: false,
      recovered: false,
      ships: [],
    },
    links: {
      patch: {
        small: 'https://images2.imgbox.com/6c/cb/na1tzhHs_o.png',
        large: 'https://images2.imgbox.com/4a/80/k1oAkY0k_o.png',
      },
      reddit: {
        campaign: null,
        launch: null,
        media: null,
        recovery: null,
      },
      flickr: {
        small: [],
        original: [rocketImg],
      },
      presskit: null,
      webcast: 'https://www.youtube.com/watch?v=v0w9p3U8860',
      youtube_id: 'v0w9p3U8860',
      article: 'http://www.spacex.com/news/2013/02/11/falcon-1-flight-3-mission-summary',
      wikipedia: 'https://en.wikipedia.org/wiki/Trailblazer_(satellite)',
    },
    static_fire_date_utc: null,
    static_fire_date_unix: null,
    net: false,
    window: 0,
    rocket: '5e9d0d95eda69955f709d1eb',
    success: false,
    failures: [
      {
        time: 140,
        altitude: 35,
        reason: 'residual stage-1 thrust led to collision between stage 1 and stage 2',
      },
    ],
    details: 'Residual stage 1 thrust led to collision between stage 1 and stage 2',
    crew: [],
    ships: [],
    capsules: [],
    payloads: ['5eb0e4b6b6c3bb0006eeb1e3', '5eb0e4b6b6c3bb0006eeb1e4'],
    launchpad: '5e9e4502f5090995de566f86',
    flight_number: 3,
    name: 'Trailblazer',
    date_utc: '2008-08-03T03:34:00.000Z',
    date_unix: 1217734440,
    date_local: '2008-08-03T15:34:00+12:00',
    date_precision: 'hour',
    upcoming: false,
    cores: [
      {
        core: '5e9e289ef3591814873b2625',
        flight: 1,
        gridfins: false,
        legs: false,
        reused: false,
        landing_attempt: false,
        landing_success: null,
        landing_type: null,
        landpad: null,
      },
    ],
    auto_update: true,
    tbd: false,
    launch_library_id: null,
    id: '5eb87cdbffd86e000604b32c',
  },
  {
    fairings: {
      reused: false,
      recovery_attempt: false,
      recovered: false,
      ships: [],
    },
    links: {
      patch: {
        small: 'https://images2.imgbox.com/95/39/sRqN7rsv_o.png',
        large: 'https://images2.imgbox.com/a3/99/qswRYzE8_o.png',
      },
      reddit: {
        campaign: null,
        launch: null,
        media: null,
        recovery: null,
      },
      flickr: {
        small: [],
        original: [rocketImg],
      },
      presskit: null,
      webcast: 'https://www.youtube.com/watch?v=dLQ2tZEH6G0',
      youtube_id: 'dLQ2tZEH6G0',
      article: 'https://en.wikipedia.org/wiki/Ratsat',
      wikipedia: 'https://en.wikipedia.org/wiki/Ratsat',
    },
    static_fire_date_utc: '2008-09-20T00:00:00.000Z',
    static_fire_date_unix: 1221868800,
    net: false,
    window: 0,
    rocket: '5e9d0d95eda69955f709d1eb',
    success: true,
    failures: [],
    details:
      'Ratsat was carried to orbit on the first successful orbital launch of any privately funded and developed, liquid-propelled carrier rocket, the SpaceX Falcon 1',
    crew: [],
    ships: [],
    capsules: [],
    payloads: ['5eb0e4b7b6c3bb0006eeb1e5'],
    launchpad: '5e9e4502f5090995de566f86',
    flight_number: 4,
    name: 'RatSat',
    date_utc: '2008-09-28T23:15:00.000Z',
    date_unix: 1222643700,
    date_local: '2008-09-28T11:15:00+12:00',
    date_precision: 'hour',
    upcoming: false,
    cores: [
      {
        core: '5e9e289ef3591855dc3b2626',
        flight: 1,
        gridfins: false,
        legs: false,
        reused: false,
        landing_attempt: false,
        landing_success: null,
        landing_type: null,
        landpad: null,
      },
    ],
    auto_update: true,
    tbd: false,
    launch_library_id: null,
    id: '5eb87cdbffd86e000604b32d',
  },
  {
    fairings: {
      reused: false,
      recovery_attempt: false,
      recovered: false,
      ships: [],
    },
    links: {
      patch: {
        small: 'https://images2.imgbox.com/ab/5a/Pequxd5d_o.png',
        large: 'https://images2.imgbox.com/92/e4/7Cf6MLY0_o.png',
      },
      reddit: {
        campaign: null,
        launch: null,
        media: null,
        recovery: null,
      },
      flickr: {
        small: [],
        original: [],
      },
      presskit:
        'http://www.spacex.com/press/2012/12/19/spacexs-falcon-1-successfully-delivers-razaksat-satellite-orbit',
      webcast: 'https://www.youtube.com/watch?v=yTaIDooc8Og',
      youtube_id: 'yTaIDooc8Og',
      article: 'http://www.spacex.com/news/2013/02/12/falcon-1-flight-5',
      wikipedia: 'https://en.wikipedia.org/wiki/RazakSAT',
    },
    static_fire_date_utc: null,
    static_fire_date_unix: null,
    net: false,
    window: 0,
    rocket: '5e9d0d95eda69955f709d1eb',
    success: true,
    failures: [],
    details: null,
    crew: [],
    ships: [],
    capsules: [],
    payloads: ['5eb0e4b7b6c3bb0006eeb1e6'],
    launchpad: '5e9e4502f5090995de566f86',
    flight_number: 5,
    name: 'RazakSat',
    date_utc: '2009-07-13T03:35:00.000Z',
    date_unix: 1247456100,
    date_local: '2009-07-13T15:35:00+12:00',
    date_precision: 'hour',
    upcoming: false,
    cores: [
      {
        core: '5e9e289ef359184f103b2627',
        flight: 1,
        gridfins: false,
        legs: false,
        reused: false,
        landing_attempt: false,
        landing_success: null,
        landing_type: null,
        landpad: null,
      },
    ],
    auto_update: true,
    tbd: false,
    launch_library_id: null,
    id: '5eb87cdcffd86e000604b32e',
  },
  {
    fairings: {
      reused: null,
      recovery_attempt: null,
      recovered: null,
      ships: [],
    },
    links: {
      patch: {
        small: 'https://images2.imgbox.com/73/7f/u7BKqv2C_o.png',
        large: 'https://images2.imgbox.com/66/b4/8KZsjbt4_o.png',
      },
      reddit: {
        campaign: null,
        launch: null,
        media: null,
        recovery: null,
      },
      flickr: {
        small: [],
        original: [rocketImg],
      },
      presskit: 'http://forum.nasaspaceflight.com/index.php?action=dlattach;topic=21869.0;attach=230821',
      webcast: 'https://www.youtube.com/watch?v=nxSxgBKlYws',
      youtube_id: 'nxSxgBKlYws',
      article: 'http://www.spacex.com/news/2013/02/12/falcon-9-flight-1',
      wikipedia: 'https://en.wikipedia.org/wiki/Dragon_Spacecraft_Qualification_Unit',
    },
    static_fire_date_utc: '2010-03-13T00:00:00.000Z',
    static_fire_date_unix: 1268438400,
    net: false,
    window: 0,
    rocket: '5e9d0d95eda69973a809d1ec',
    success: true,
    failures: [],
    details: null,
    crew: [],
    ships: [],
    capsules: [],
    payloads: ['5eb0e4b7b6c3bb0006eeb1e7'],
    launchpad: '5e9e4501f509094ba4566f84',
    flight_number: 6,
    name: 'Falcon 9 Test Flight',
    date_utc: '2010-06-04T18:45:00.000Z',
    date_unix: 1275677100,
    date_local: '2010-06-04T14:45:00-04:00',
    date_precision: 'hour',
    upcoming: false,
    cores: [
      {
        core: '5e9e289ef359185f2b3b2628',
        flight: 1,
        gridfins: false,
        legs: false,
        reused: false,
        landing_attempt: false,
        landing_success: null,
        landing_type: null,
        landpad: null,
      },
    ],
    auto_update: true,
    tbd: false,
    launch_library_id: null,
    id: '5eb87cddffd86e000604b32f',
  },
  {
    fairings: null,
    links: {
      patch: {
        small: 'https://images2.imgbox.com/fa/dc/FOUDQ0Sn_o.png',
        large: 'https://images2.imgbox.com/04/6e/kniggvWD_o.png',
      },
      reddit: {
        campaign: null,
        launch: null,
        media: null,
        recovery: null,
      },
      flickr: {
        small: [],
        original: [],
      },
      presskit: 'http://www.spacex.com/files/downloads/cots1-20101206.pdf',
      webcast: 'https://www.youtube.com/watch?v=cdLITgWKe_0',
      youtube_id: 'cdLITgWKe_0',
      article: 'https://en.wikipedia.org/wiki/SpaceX_COTS_Demo_Flight_1',
      wikipedia: 'https://en.wikipedia.org/wiki/SpaceX_COTS_Demo_Flight_1',
    },
    static_fire_date_utc: '2010-12-04T00:00:00.000Z',
    static_fire_date_unix: 1291420800,
    net: false,
    window: 0,
    rocket: '5e9d0d95eda69973a809d1ec',
    success: true,
    failures: [],
    details: null,
    crew: [],
    ships: ['5ea6ed2d080df4000697c901'],
    capsules: ['5e9e2c5bf35918ed873b2664'],
    payloads: ['5eb0e4b9b6c3bb0006eeb1e8', '5eb0e4b9b6c3bb0006eeb1e9'],
    launchpad: '5e9e4501f509094ba4566f84',
    flight_number: 7,
    name: 'COTS 1',
    date_utc: '2010-12-08T15:43:00.000Z',
    date_unix: 1291822980,
    date_local: '2010-12-08T11:43:00-04:00',
    date_precision: 'hour',
    upcoming: false,
    cores: [
      {
        core: '5e9e289ef35918187c3b2629',
        flight: 1,
        gridfins: false,
        legs: false,
        reused: false,
        landing_attempt: false,
        landing_success: null,
        landing_type: null,
        landpad: null,
      },
    ],
    auto_update: true,
    tbd: false,
    launch_library_id: null,
    id: '5eb87cdeffd86e000604b330',
  },
  {
    fairings: null,
    links: {
      patch: {
        small: 'https://images2.imgbox.com/c5/f4/XfLVgbaO_o.png',
        large: 'https://images2.imgbox.com/94/8d/YnZ1SLsT_o.png',
      },
      reddit: {
        campaign: null,
        launch: null,
        media: null,
        recovery: null,
      },
      flickr: {
        small: [],
        original: [rocketImg],
      },
      presskit: 'https://www.nasa.gov/pdf/649910main_cots2_presskit_051412.pdf',
      webcast: 'https://www.youtube.com/watch?v=tpQzDbAY7yI',
      youtube_id: 'tpQzDbAY7yI',
      article: 'https://en.wikipedia.org/wiki/Dragon_C2%2B',
      wikipedia: 'https://en.wikipedia.org/wiki/Dragon_C2%2B',
    },
    static_fire_date_utc: '2012-04-30T00:00:00.000Z',
    static_fire_date_unix: 1335744000,
    net: false,
    window: 0,
    rocket: '5e9d0d95eda69973a809d1ec',
    success: true,
    failures: [],
    details: 'Launch was scrubbed on first attempt, second launch attempt was successful',
    crew: [],
    ships: ['5ea6ed2d080df4000697c901'],
    capsules: ['5e9e2c5bf3591882af3b2665'],
    payloads: ['5eb0e4bab6c3bb0006eeb1ea'],
    launchpad: '5e9e4501f509094ba4566f84',
    flight_number: 8,
    name: 'COTS 2',
    date_utc: '2012-05-22T07:44:00.000Z',
    date_unix: 1335944640,
    date_local: '2012-05-22T03:44:00-04:00',
    date_precision: 'hour',
    upcoming: false,
    cores: [
      {
        core: '5e9e289ef35918f39c3b262a',
        flight: 1,
        gridfins: false,
        legs: false,
        reused: false,
        landing_attempt: false,
        landing_success: null,
        landing_type: null,
        landpad: null,
      },
    ],
    auto_update: true,
    tbd: false,
    launch_library_id: null,
    id: '5eb87cdfffd86e000604b331',
  },
  {
    fairings: null,
    links: {
      patch: {
        small: 'https://images2.imgbox.com/3e/91/hlGiK49a_o.png',
        large: 'https://images2.imgbox.com/fb/42/0V9JgYQS_o.png',
      },
      reddit: {
        campaign: null,
        launch: null,
        media: null,
        recovery: null,
      },
      flickr: {
        small: [],
        original: [rocketImg],
      },
      presskit: 'https://www.nasa.gov/pdf/694166main_SpaceXCRS-1PressKit.pdf',
      webcast: 'https://www.youtube.com/watch?v=-Vk3hiV_zXU',
      youtube_id: '-Vk3hiV_zXU',
      article: 'https://www.nasa.gov/mission_pages/station/main/spacex-crs1-target.html',
      wikipedia: 'https://en.wikipedia.org/wiki/SpaceX_CRS-1',
    },
    static_fire_date_utc: '2012-09-29T00:00:00.000Z',
    static_fire_date_unix: 1348876800,
    net: false,
    window: 0,
    rocket: '5e9d0d95eda69973a809d1ec',
    success: true,
    failures: [],
    details:
      "CRS-1 successful, but the secondary payload was inserted into abnormally low orbit and lost due to Falcon 9 boost stage engine failure, ISS visiting vehicle safety rules, and the primary payload owner's contractual right to decline a second ignition of the second stage under some conditions.",
    crew: [],
    ships: ['5ea6ed2d080df4000697c902'],
    capsules: ['5e9e2c5bf3591835983b2666'],
    payloads: ['5eb0e4bab6c3bb0006eeb1eb', '5eb0e4bab6c3bb0006eeb1ec'],
    launchpad: '5e9e4501f509094ba4566f84',
    flight_number: 9,
    name: 'CRS-1',
    date_utc: '2012-10-08T00:35:00.000Z',
    date_unix: 1349656500,
    date_local: '2012-10-08T20:35:00-04:00',
    date_precision: 'hour',
    upcoming: false,
    cores: [
      {
        core: '5e9e289ff3591821a73b262b',
        flight: 1,
        gridfins: false,
        legs: false,
        reused: false,
        landing_attempt: false,
        landing_success: null,
        landing_type: null,
        landpad: null,
      },
    ],
    auto_update: true,
    tbd: false,
    launch_library_id: null,
    id: '5eb87ce0ffd86e000604b332',
  },
  {
    fairings: null,
    links: {
      patch: {
        small: 'https://images2.imgbox.com/bd/fe/lXUYKL28_o.png',
        large: 'https://images2.imgbox.com/bc/c5/fHN3m8KV_o.png',
      },
      reddit: {
        campaign: null,
        launch: 'https://www.reddit.com/r/space/comments/19gm5f/live_coverage_spacex_crs2_launch_to_the_iss/c8nvah4',
        media: null,
        recovery: null,
      },
      flickr: {
        small: [],
        original: [rocketImg],
      },
      presskit: 'https://www.nasa.gov/sites/default/files/files/Orb2_PRESS_KIT.pdf',
      webcast: 'https://www.youtube.com/watch?v=ik0ElKl5kW4',
      youtube_id: 'ik0ElKl5kW4',
      article: 'https://en.wikipedia.org/wiki/SpaceX_CRS-2',
      wikipedia: 'https://en.wikipedia.org/wiki/SpaceX_CRS-2',
    },
    static_fire_date_utc: '2013-02-25T18:30:00.000Z',
    static_fire_date_unix: 1361817000,
    net: false,
    window: 0,
    rocket: '5e9d0d95eda69973a809d1ec',
    success: true,
    failures: [],
    details: 'Last launch of the original Falcon 9 v1.0 launch vehicle',
    crew: [],
    ships: ['5ea6ed2d080df4000697c902'],
    capsules: ['5e9e2c5bf359189ef23b2667'],
    payloads: ['5eb0e4bbb6c3bb0006eeb1ed'],
    launchpad: '5e9e4501f509094ba4566f84',
    flight_number: 10,
    name: 'CRS-2',
    date_utc: '2013-03-01T19:10:00.000Z',
    date_unix: 1362165000,
    date_local: '2013-03-01T15:10:00-04:00',
    date_precision: 'hour',
    upcoming: false,
    cores: [
      {
        core: '5e9e289ff3591884e03b262c',
        flight: 1,
        gridfins: false,
        legs: false,
        reused: false,
        landing_attempt: false,
        landing_success: null,
        landing_type: null,
        landpad: null,
      },
    ],
    auto_update: true,
    tbd: false,
    launch_library_id: null,
    id: '5eb87ce1ffd86e000604b333',
  },
  {
    fairings: {
      reused: false,
      recovery_attempt: false,
      recovered: false,
      ships: [],
    },
    links: {
      patch: {
        small: 'https://images2.imgbox.com/f8/27/XwZPEhTJ_o.png',
        large: 'https://images2.imgbox.com/ae/62/D6SZleUG_o.png',
      },
      reddit: {
        campaign: null,
        launch: 'http://www.reddit.com/r/spacex/comments/1ndlay',
        media: null,
        recovery: null,
      },
      flickr: {
        small: [],
        original: [rocketImg],
      },
      presskit: 'https://spaceflightnow.com/falcon9/006/UpgradedF9DemoMission_PressKit.pdf',
      webcast: 'https://www.youtube.com/watch?v=uFefasS6bhc',
      youtube_id: 'uFefasS6bhc',
      article: 'http://www.parabolicarc.com/2013/09/29/falcon-9-launch-payloads-orbit-vandenberg/',
      wikipedia: 'https://en.wikipedia.org/wiki/CASSIOPE',
    },
    static_fire_date_utc: '2013-09-19T00:00:00.000Z',
    static_fire_date_unix: 1379548800,
    net: false,
    window: 0,
    rocket: '5e9d0d95eda69973a809d1ec',
    success: true,
    failures: [],
    details:
      'Commercial mission and first Falcon 9 v1.1 flight, with improved 13-tonne to LEO capacity. Following second-stage separation from the first stage, an attempt was made to perform an ocean touchdown test of the discarded booster vehicle. The test provided good test data on the experiment-its primary objective-but as the booster neared the ocean, aerodynamic forces caused an uncontrollable roll. The center engine, depleted of fuel by centrifugal force, shut down resulting in the impact and destruction of the vehicle.',
    crew: [],
    ships: ['5ea6ed2d080df4000697c903'],
    capsules: [],
    payloads: ['5eb0e4bbb6c3bb0006eeb1ee'],
    launchpad: '5e9e4502f509092b78566f87',
    flight_number: 11,
    name: 'CASSIOPE',
    date_utc: '2013-09-29T16:00:00.000Z',
    date_unix: 1380470400,
    date_local: '2013-09-29T09:00:00-07:00',
    date_precision: 'hour',
    upcoming: false,
    cores: [
      {
        core: '5e9e289ff359180ae23b262d',
        flight: 1,
        gridfins: false,
        legs: false,
        reused: false,
        landing_attempt: true,
        landing_success: false,
        landing_type: 'Ocean',
        landpad: null,
      },
    ],
    auto_update: true,
    tbd: false,
    launch_library_id: null,
    id: '5eb87ce1ffd86e000604b334',
  },
  {
    fairings: {
      reused: false,
      recovery_attempt: false,
      recovered: false,
      ships: [],
    },
    links: {
      patch: {
        small: 'https://images2.imgbox.com/4e/f8/rqu7XWMF_o.png',
        large: 'https://images2.imgbox.com/41/b7/H6vprzuB_o.png',
      },
      reddit: {
        campaign: null,
        launch: 'http://www.reddit.com/r/spacex/comments/1ryy1n',
        media: null,
        recovery: null,
      },
      flickr: {
        small: [],
        original: [rocketImg],
      },
      presskit: 'http://www.spacex.com/sites/spacex/files/spacex_ses-8launch_presskit.pdf',
      webcast: 'https://www.youtube.com/watch?v=aAj5xapImEs',
      youtube_id: 'aAj5xapImEs',
      article: 'https://www.nasaspaceflight.com/2013/12/spacex-falcon-9-v1-1-milestone-ses-8-launch/',
      wikipedia: 'https://en.wikipedia.org/wiki/SES-8',
    },
    static_fire_date_utc: '2013-11-22T06:26:00.000Z',
    static_fire_date_unix: 1385101560,
    net: false,
    window: 0,
    rocket: '5e9d0d95eda69973a809d1ec',
    success: true,
    failures: [],
    details: 'First GTO launch for Falcon 9',
    crew: [],
    ships: [],
    capsules: [],
    payloads: ['5eb0e4bbb6c3bb0006eeb1ef'],
    launchpad: '5e9e4501f509094ba4566f84',
    flight_number: 12,
    name: 'SES-8',
    date_utc: '2013-12-03T22:41:00.000Z',
    date_unix: 1386110460,
    date_local: '2013-12-03T18:41:00-04:00',
    date_precision: 'hour',
    upcoming: false,
    cores: [
      {
        core: '5e9e289ff35918862c3b262e',
        flight: 1,
        gridfins: false,
        legs: false,
        reused: false,
        landing_attempt: false,
        landing_success: null,
        landing_type: null,
        landpad: null,
      },
    ],
    auto_update: true,
    tbd: false,
    launch_library_id: null,
    id: '5eb87ce2ffd86e000604b335',
  },
  {
    fairings: {
      reused: false,
      recovery_attempt: false,
      recovered: false,
      ships: [],
    },
    links: {
      patch: {
        small: 'https://images2.imgbox.com/5c/20/AsqTXJDC_o.png',
        large: 'https://images2.imgbox.com/f5/fa/JvLWfNZz_o.png',
      },
      reddit: {
        campaign: null,
        launch: 'http://www.reddit.com/r/spacex/comments/1ujoc0',
        media: null,
        recovery: null,
      },
      flickr: {
        small: [],
        original: [
          rocketImg,
          'https://farm8.staticflickr.com/7619/16763151866_35a0a4d8e1_o.jpg',
          'https://farm9.staticflickr.com/8569/16169086873_4d8829832e_o.png',
        ],
      },
      presskit: 'http://www.spacex.com/sites/spacex/files/spacex_thaicom6_presskit.pdf',
      webcast: 'https://www.youtube.com/watch?v=AnSNRzMEmCU',
      youtube_id: 'AnSNRzMEmCU',
      article: 'http://spacenews.com/38959spacex-delivers-thaicom-6-satellite-to-orbit/',
      wikipedia: 'https://en.wikipedia.org/wiki/Thaicom_6',
    },
    static_fire_date_utc: '2013-12-28T00:00:00.000Z',
    static_fire_date_unix: 1388188800,
    net: false,
    window: 0,
    rocket: '5e9d0d95eda69973a809d1ec',
    success: true,
    failures: [],
    details:
      'Second GTO launch for Falcon 9. The USAF evaluated launch data from this flight as part of a separate certification program for SpaceX to qualify to fly U.S. military payloads and found that the Thaicom 6 launch had "unacceptable fuel reserves at engine cutoff of the stage 2 second burnoff"',
    crew: [],
    ships: [],
    capsules: [],
    payloads: ['5eb0e4bbb6c3bb0006eeb1f0'],
    launchpad: '5e9e4501f509094ba4566f84',
    flight_number: 13,
    name: 'Thaicom 6',
    date_utc: '2014-01-06T18:06:00.000Z',
    date_unix: 1389031560,
    date_local: '2014-01-06T14:06:00-04:00',
    date_precision: 'hour',
    upcoming: false,
    cores: [
      {
        core: '5e9e289ff3591878603b262f',
        flight: 1,
        gridfins: false,
        legs: false,
        reused: false,
        landing_attempt: false,
        landing_success: null,
        landing_type: null,
        landpad: null,
      },
    ],
    auto_update: true,
    tbd: false,
    launch_library_id: null,
    id: '5eb87ce3ffd86e000604b336',
  },
  {
    fairings: null,
    links: {
      patch: {
        small: 'https://images2.imgbox.com/ae/3c/yVvE2vVh_o.png',
        large: 'https://images2.imgbox.com/82/c7/bbs0gt88_o.png',
      },
      reddit: {
        campaign: null,
        launch: 'http://www.reddit.com/r/spacex/comments/22zo8c',
        media: null,
        recovery: null,
      },
      flickr: {
        small: [],
        original: [
          rocketImg,
          'https://farm9.staticflickr.com/8597/16856369125_e97cd30ef7_o.jpg',
          'https://farm8.staticflickr.com/7586/16166732954_9338dc859c_o.jpg',
          'https://farm8.staticflickr.com/7603/16855223522_462da54e84_o.jpg',
          'https://farm8.staticflickr.com/7618/16234010894_e1210ec300_o.jpg',
          'https://farm8.staticflickr.com/7617/16855338881_69542a2fa9_o.jpg',
        ],
      },
      presskit: 'http://www.spacex.com/sites/spacex/files/spacexcrs-3_presskit_042014.pdf',
      webcast: 'https://www.youtube.com/watch?v=Od-lON4bTyQ',
      youtube_id: 'Od-lON4bTyQ',
      article: 'https://newatlas.com/crs-3-launch-spacex/31671/',
      wikipedia: 'https://en.wikipedia.org/wiki/SpaceX_CRS-3',
    },
    static_fire_date_utc: '2014-03-08T00:00:00.000Z',
    static_fire_date_unix: 1394236800,
    net: false,
    window: 0,
    rocket: '5e9d0d95eda69973a809d1ec',
    success: true,
    failures: [],
    details:
      'Following second-stage separation, SpaceX conducted a second controlled-descent test of the discarded booster vehicle and achieved the first successful controlled ocean touchdown of a liquid-rocket-engine orbital booster. Following touchdown the first stage tipped over as expected and was destroyed. This was the first Falcon 9 booster to fly with extensible landing legs and the first Dragon mission with the Falcon 9 v1.1 launch vehicle.',
    crew: [],
    ships: ['5ea6ed2d080df4000697c902'],
    capsules: ['5e9e2c5bf3591859a63b2668'],
    payloads: ['5eb0e4bbb6c3bb0006eeb1f1'],
    launchpad: '5e9e4501f509094ba4566f84',
    flight_number: 14,
    name: 'CRS-3',
    date_utc: '2014-04-18T19:25:00.000Z',
    date_unix: 1397849100,
    date_local: '2014-04-18T15:25:00-04:00',
    date_precision: 'hour',
    upcoming: false,
    cores: [
      {
        core: '5e9e289ff3591829343b2630',
        flight: 1,
        gridfins: false,
        legs: true,
        reused: false,
        landing_attempt: true,
        landing_success: true,
        landing_type: 'Ocean',
        landpad: null,
      },
    ],
    auto_update: true,
    tbd: false,
    launch_library_id: null,
    id: '5eb87ce4ffd86e000604b337',
  },
  {
    fairings: {
      reused: false,
      recovery_attempt: false,
      recovered: false,
      ships: [],
    },
    links: {
      patch: {
        small: 'https://images2.imgbox.com/a4/44/YWAUBkOe_o.png',
        large: 'https://images2.imgbox.com/fd/41/FUnfqHHH_o.png',
      },
      reddit: {
        campaign: null,
        launch: 'http://www.reddit.com/r/spacex/comments/2aany2',
        media: null,
        recovery: null,
      },
      flickr: {
        small: [],
        original: [
          rocketImg,
          'https://farm9.staticflickr.com/8747/16581738577_83e0690136_o.png',
          'https://farm8.staticflickr.com/7285/16581736047_6fd536ab11_o.jpg',
          'https://farm8.staticflickr.com/7597/16789021675_35f0148f78_o.jpg',
          'https://farm8.staticflickr.com/7631/16236321533_829ae07b42_o.jpg',
          'https://farm9.staticflickr.com/8726/16830422056_26c2265bbc_o.jpg',
          'https://farm9.staticflickr.com/8591/16670149079_33d6cc3631_o.jpg',
        ],
      },
      presskit: 'http://www.spacex.com/sites/spacex/files/spacex_orbcomm_presskit_final.pdf',
      webcast: 'https://www.youtube.com/watch?v=lbHnSu-DLR4',
      youtube_id: 'lbHnSu-DLR4',
      article: 'https://www.orbcomm.com/en/networks/satellite/orbcomm-og2',
      wikipedia: 'https://en.wikipedia.org/wiki/Falcon_9_flight_10',
    },
    static_fire_date_utc: '2015-12-19T04:57:00.000Z',
    static_fire_date_unix: 1450501020,
    net: false,
    window: 0,
    rocket: '5e9d0d95eda69973a809d1ec',
    success: true,
    failures: [],
    details:
      'Total payload mass was 1,316 kg (2,901 lb) : 6 satellites weighing 172 kg each, plus two 142-kg mass simulators. This was the second Falcon 9 booster equipped with landing legs. Following second-stage separation, SpaceX conducted a controlled-descent test of the first stage, which successfully decelerated from hypersonic velocity in the upper atmosphere, made reentry and landing burns, deployed its legs and touched down on the ocean surface. As with the previous mission, the first stage then tipped over as expected and was not recovered.',
    crew: [],
    ships: [],
    capsules: [],
    payloads: ['5eb0e4bcb6c3bb0006eeb1f2'],
    launchpad: '5e9e4501f509094ba4566f84',
    flight_number: 15,
    name: 'OG-2 Mission 1',
    date_utc: '2014-07-14T15:15:00.000Z',
    date_unix: 1405350900,
    date_local: '2014-07-14T11:15:00-04:00',
    date_precision: 'hour',
    upcoming: false,
    cores: [
      {
        core: '5e9e28a0f3591870a63b2631',
        flight: 1,
        gridfins: false,
        legs: true,
        reused: false,
        landing_attempt: true,
        landing_success: true,
        landing_type: 'Ocean',
        landpad: null,
      },
    ],
    auto_update: true,
    tbd: false,
    launch_library_id: null,
    id: '5eb87ce4ffd86e000604b338',
  },
  {
    fairings: {
      reused: false,
      recovery_attempt: false,
      recovered: false,
      ships: [],
    },
    links: {
      patch: {
        small: 'https://images2.imgbox.com/dd/4d/szidadu8_o.png',
        large: 'https://images2.imgbox.com/60/3f/hwK01Qce_o.png',
      },
      reddit: {
        campaign: null,
        launch: 'http://www.reddit.com/r/spacex/comments/2fenrv',
        media: null,
        recovery: null,
      },
      flickr: {
        small: [],
        original: [
          rocketImg,
          'https://farm8.staticflickr.com/7603/16648925347_769a6009c7_o.jpg',
          'https://farm9.staticflickr.com/8687/16789027675_cde1bd098a_o.jpg',
          'https://farm8.staticflickr.com/7629/16668638138_7acf13cfb5_o.jpg',
          'https://farm8.staticflickr.com/7281/16668845950_7680146525_o.jpg',
          'https://farm8.staticflickr.com/7626/16233865484_10d9925b5d_o.jpg',
        ],
      },
      presskit: 'https://spaceflightnow.com/falcon9/011/presskit.pdf',
      webcast: 'https://www.youtube.com/watch?v=essrkMGlw5s',
      youtube_id: 'essrkMGlw5s',
      article: 'http://spacenews.com/41497spacex-launches-first-of-two-satellites-for-asiasat/',
      wikipedia: 'https://en.wikipedia.org/wiki/AsiaSat_8',
    },
    static_fire_date_utc: '2014-07-31T23:35:15.000Z',
    static_fire_date_unix: 1406849715,
    net: false,
    window: 0,
    rocket: '5e9d0d95eda69973a809d1ec',
    success: true,
    failures: [],
    details: null,
    crew: [],
    ships: [],
    capsules: [],
    payloads: ['5eb0e4bcb6c3bb0006eeb1f3'],
    launchpad: '5e9e4501f509094ba4566f84',
    flight_number: 16,
    name: 'AsiaSat 8',
    date_utc: '2014-08-05T08:00:00.000Z',
    date_unix: 1407225600,
    date_local: '2014-08-05T04:00:00-04:00',
    date_precision: 'hour',
    upcoming: false,
    cores: [
      {
        core: '5e9e28a0f359186e2e3b2632',
        flight: 1,
        gridfins: false,
        legs: false,
        reused: false,
        landing_attempt: false,
        landing_success: null,
        landing_type: null,
        landpad: null,
      },
    ],
    auto_update: true,
    tbd: false,
    launch_library_id: null,
    id: '5eb87ce5ffd86e000604b339',
  },
  {
    fairings: {
      reused: false,
      recovery_attempt: false,
      recovered: false,
      ships: [],
    },
    links: {
      patch: {
        small: 'https://images2.imgbox.com/d4/ea/jdJqr6He_o.png',
        large: 'https://images2.imgbox.com/5a/f0/b3TgnmVr_o.png',
      },
      reddit: {
        campaign: null,
        launch: 'http://www.reddit.com/r/spacex/comments/2fenrv',
        media: null,
        recovery: null,
      },
      flickr: {
        small: [],
        original: [
          rocketImg,
          'https://farm9.staticflickr.com/8742/16233828644_96738200b2_o.jpg',
          'https://farm8.staticflickr.com/7645/16601443698_e70315d1ed_o.jpg',
          'https://farm9.staticflickr.com/8730/16830335046_5f017c17be_o.jpg',
          'https://farm9.staticflickr.com/8637/16855040322_57671ab8eb_o.jpg',
        ],
      },
      presskit: 'https://www.spaceflightnow.com/falcon9/012/presskit.pdf',
      webcast: 'https://www.youtube.com/watch?v=39ninsyTRk8',
      youtube_id: '39ninsyTRk8',
      article: 'https://www.space.com/27052-spacex-launches-asiasat6-satellite.html',
      wikipedia: 'https://en.wikipedia.org/wiki/AsiaSat_6',
    },
    static_fire_date_utc: '2014-08-22T23:51:18.000Z',
    static_fire_date_unix: 1408751478,
    net: false,
    window: 7200,
    rocket: '5e9d0d95eda69973a809d1ec',
    success: true,
    failures: [],
    details: null,
    crew: [],
    ships: [],
    capsules: [],
    payloads: ['5eb0e4bcb6c3bb0006eeb1f4'],
    launchpad: '5e9e4501f509094ba4566f84',
    flight_number: 17,
    name: 'AsiaSat 6',
    date_utc: '2014-09-07T05:00:00.000Z',
    date_unix: 1410066000,
    date_local: '2014-09-07T01:00:00-04:00',
    date_precision: 'hour',
    upcoming: false,
    cores: [
      {
        core: '5e9e28a0f35918b1bc3b2633',
        flight: 1,
        gridfins: false,
        legs: false,
        reused: false,
        landing_attempt: false,
        landing_success: null,
        landing_type: null,
        landpad: null,
      },
    ],
    auto_update: true,
    tbd: false,
    launch_library_id: null,
    id: '5eb87ce6ffd86e000604b33a',
  },
  {
    fairings: null,
    links: {
      patch: {
        small: 'https://images2.imgbox.com/7b/fb/Mm0LdwGY_o.png',
        large: 'https://images2.imgbox.com/21/13/ps1yJZFD_o.png',
      },
      reddit: {
        campaign: null,
        launch: 'http://www.reddit.com/r/spacex/comments/2grxer',
        media: null,
        recovery: null,
      },
      flickr: {
        small: [],
        original: [
          rocketImg,
          'https://farm9.staticflickr.com/8593/16763199166_38ba2cafc8_o.jpg',
          'https://farm9.staticflickr.com/8655/16789074175_ba03989359_o.png',
          'https://farm9.staticflickr.com/8659/16166761954_ebc2a72b2a_o.jpg',
          'https://farm9.staticflickr.com/8620/16642025217_a6852b9499_o.jpg',
        ],
      },
      presskit: 'https://www.nasa.gov/sites/default/files/files/SpaceX_NASA_CRS-4_PressKit.pdf',
      webcast: 'https://www.youtube.com/watch?v=7YkCh7uOw1Y',
      youtube_id: '7YkCh7uOw1Y',
      article:
        'https://www.nasa.gov/press/2014/september/nasa-cargo-launches-to-space-station-aboard-spacex-resupply-mission-0',
      wikipedia: 'https://en.wikipedia.org/wiki/SpaceX_CRS-4',
    },
    static_fire_date_utc: '2014-09-17T00:00:00.000Z',
    static_fire_date_unix: 1410912000,
    net: false,
    window: 0,
    rocket: '5e9d0d95eda69973a809d1ec',
    success: true,
    failures: [],
    details: null,
    crew: [],
    ships: ['5ea6ed2d080df4000697c902'],
    capsules: ['5e9e2c5bf3591880643b2669'],
    payloads: ['5eb0e4bcb6c3bb0006eeb1f5'],
    launchpad: '5e9e4501f509094ba4566f84',
    flight_number: 18,
    name: 'CRS-4',
    date_utc: '2014-09-21T05:52:00.000Z',
    date_unix: 1411278720,
    date_local: '2014-09-21T01:52:00-04:00',
    date_precision: 'hour',
    upcoming: false,
    cores: [
      {
        core: '5e9e28a0f359184a683b2634',
        flight: 1,
        gridfins: false,
        legs: false,
        reused: false,
        landing_attempt: true,
        landing_success: false,
        landing_type: 'Ocean',
        landpad: null,
      },
    ],
    auto_update: true,
    tbd: false,
    launch_library_id: null,
    id: '5eb87ce7ffd86e000604b33b',
  },
];
