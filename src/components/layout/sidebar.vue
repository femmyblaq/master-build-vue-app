<template>
  <div id="sidebar">
    <div class="sidebar-content w-100">
      <a href="/" class="d-flex justify-content-center"
        ><img src="../../../public/assets/masterbuid2.png" alt=""
      /></a>
      <ul class="list-unstyled">
        <li class="py-2">
          <a href="/dashboard" class="text-decoration-none ms-3"
            ><i class="fas fa-columns me-2"></i>Dashboard</a
          >
        </li>
        <li class="py-2">
          <a
            class="text-decoration-none"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <p class="mb-0"><i class="far fa-user me-2"></i>Users</p>
          </a>

          <ul class="collapse px-4" id="collapseExample">
            <li>
              <a
                href=""
                style="font-size: 0.7em;"
                class="text-decoration-none text-muted"
                >Add New User</a
              >
            </li>
            <li>
              <a
                href=""
                style="font-size: 0.7em;"
                class="text-decoration-none text-muted"
                >All Users</a
              >
            </li>
          </ul>
        </li>
        <li class="py-2">
          <a
            class="text-decoration-none"
            data-bs-toggle="collapse"
            href="#collapseExample2"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <p class="mb-0"><i class="fas fa-cog me-2"></i>Settings</p></a
          >
          <ul class="collapse px-4" id="collapseExample2">
            <li>
              <a
                href=""
                style="font-size: 0.7em;"
                class="text-decoration-none text-muted"
                >Add New User</a
              >
            </li>
            <li>
              <a
                href=""
                style="font-size: 0.7em;"
                class="text-decoration-none text-muted"
                >All Users</a
              >
            </li>
          </ul>
        </li>
        <li class="py-2">
          <a href="/" class="text-decoration-none ms-3"
            ><i class="fas fa-sign-out-alt me-2"></i>Logout</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#sidebar {
  margin: 0;
  padding: 0;
  background-color: darkgreen;
  color: #ccc;
  position: fixed;
  width: 270px;
  height: 100vh;
}

#sidebar .sidebar-content ul li {
  width: 100%;
}
#sidebar .sidebar-content ul li:hover {
  background-color: rgb(34, 82, 15);
}
#sidebar .sidebar-content ul a {
  color: #ccc;
  font-size: 0.9em;
}
</style>
