"use strict";
(async () => {
  const listing = await (await fetch("cts/listing.json")).json();

  for (const {path, description} of listing) {
    console.log(path, description);
    if (!path.endsWith("/")) {
      console.log(await import("./cts/" + path + ".js"));
    }
  }
})();