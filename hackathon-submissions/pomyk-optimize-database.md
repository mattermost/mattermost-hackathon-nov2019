## Optimizations for Post table and queries
  * added RootId column to indexes idx\_posts\_channel\_id\_update\_at and idx\_posts\_channel\_id\_delete\_at\_create\_at (some queries can use index only)
  * optimized query in getParentPosts functions - up to three orders of magnitude faster in MySQL but a bit slower in PostgreSQL
  * optimized query in GetPostsSince function for MySQL - about 20% faster
  * some benchmarks for post store

## Links
  * PR: https://github.com/mattermost/mattermost-server/pull/13217/
  * benchmarks: https://github.com/Pomyk/mattermost-server/commit/4998b127b64ebeb7631175ccd9be0912ea4bb649

### Benchmark results (/1 - 140k posts in channel, /2 - 800 posts)

    benchmark                                                         old ns/op      new ns/op     delta
    BenchmarkPosts/postgres/GetFlaggedPostsForTeam/1-16               12068006       12130615      +0.52%
    BenchmarkPosts/postgres/GetFlaggedPostsForChannel/1-16            7334992        7388359       +0.73%
    BenchmarkPosts/postgres/GetPosts(skipThreads=true)/1-16           1845547        1979362       +7.25%
    BenchmarkPosts/postgres/GetPosts(skipThreads=false)/1-16          2260061        2595112       +14.82%
    BenchmarkPosts/postgres/GetPostsSince(skipThreads=true)/1-16      38510212       40625368      +5.49%
    BenchmarkPosts/postgres/GetPostsSince(skipThreads=false)/1-16     32389821       32581044      +0.59%
    BenchmarkPosts/postgres/GetFlaggedPostsForTeam/2-16               1604215        1584941       -1.20%
    BenchmarkPosts/postgres/GetFlaggedPostsForChannel/2-16            1278623        1277473       -0.09%
    BenchmarkPosts/postgres/GetPosts(skipThreads=true)/2-16           1921049        1984581       +3.31%
    BenchmarkPosts/postgres/GetPosts(skipThreads=false)/2-16          3478147        3000086       -13.74%
    BenchmarkPosts/postgres/GetPostsSince(skipThreads=true)/2-16      4813332        5198276       +8.00%
    BenchmarkPosts/postgres/GetPostsSince(skipThreads=false)/2-16     3475847        3816201       +9.79%
    BenchmarkPosts/mysql/GetFlaggedPostsForTeam/1-16                  9674132        9708361       +0.35%
    BenchmarkPosts/mysql/GetFlaggedPostsForChannel/1-16               5780763        5818874       +0.66%
    BenchmarkPosts/mysql/GetPosts(skipThreads=true)/1-16              2261194        2268826       +0.34%
    BenchmarkPosts/mysql/GetPosts(skipThreads=false)/1-16             2371804023     3184120       -99.87%
    BenchmarkPosts/mysql/GetPostsSince(skipThreads=true)/1-16         35552813       27709811      -22.06%
    BenchmarkPosts/mysql/GetPostsSince(skipThreads=false)/1-16        28758400       22622865      -21.33%
    BenchmarkPosts/mysql/GetFlaggedPostsForTeam/2-16                  1174064        1205933       +2.71%
    BenchmarkPosts/mysql/GetFlaggedPostsForChannel/2-16               1007026        1091551       +8.39%
    BenchmarkPosts/mysql/GetPosts(skipThreads=true)/2-16              2274397        2408730       +5.91%
    BenchmarkPosts/mysql/GetPosts(skipThreads=false)/2-16             7454395        2542741       -65.89%
    BenchmarkPosts/mysql/GetPostsSince(skipThreads=true)/2-16         8879200        6843435       -22.93%
    BenchmarkPosts/mysql/GetPostsSince(skipThreads=false)/2-16        6293932        5373276       -14.63%
