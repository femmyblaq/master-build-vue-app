<template>
  <div id="sidebar">
    <div class="sidebar-content w-100">
      <a href="/" class="d-flex justify-content-center"
        ><img src="../../../public/assets/masterbuid2.png" alt=""
      /></a>
      <ul>
        <li class="py-2">
          <a href="/dashboard" class="text-decoration-none ms-3"
            ><i class="fas fa-columns me-2"></i>Dashboard</a
          >
        </li>
        <li class="py-2">
          <a href="/users" class="text-decoration-none ms-3"
            ><i class="far fa-user me-2"></i>Users</a
          >
        </li>
        <li class="py-2">
          <a href="/settings" class="text-decoration-none ms-3"
            ><i class="fas fa-cog me-2"></i>Settings</a
          >
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
#sidebar .sidebar-content ul {
  list-style: none;
  width: 100%;
  padding: 0;
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
