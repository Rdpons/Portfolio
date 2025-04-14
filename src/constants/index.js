import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a dedicated front-end developer with a passion for creating beautiful, responsive, and intuitive user interfaces. With a deep understanding of HTML, CSS, JavaScript, and React, I specialize in building seamless web applications that offer an exceptional user experience across all devices. My approach focuses on clean, maintainable code, and I strive to stay ahead of the curve with modern web development trends and best practices. Whether it's crafting interactive components, optimizing performance, or ensuring accessibility, I aim to deliver pixel-perfect and user-centric solutions that bring ideas to life on the web.`;

export const ABOUT_TEXT = `<?php
include('config.php');

//add
if(isset($_POST['add'])){
    $evCode = $_POST['evCode'];
    $evName = $_POST['evName'];
    $evDate = $_POST['evDate'];
    $evVenue = $_POST['evVenue'];
    $evRFee = $_POST['evRFee'];

    $sql = "INSERT INTO events (evCode, evName, evDate, evVenue
    , evRFee) VALUES ('$evCode','$evName','$evDate','$evVenue','$evRFee')";
    $query = mysqli_query($conn, $sql);
    if($query){
        echo "<script>alert('Event Successfully added');</script>";
    }
    else{
        echo "<script>alert('Event Cannot be added');</script>";
    }
}
//delete
if(isset($_POST['delete'])){
    $evCode = $_POST['evCode'];
    $sql = "DELETE FROM events where evCode = '$evCode'";
    $query = mysqli_query($conn, $sql);

    if($query){
        echo "<script>alert('Event Successully deleted');</script>";
    }
    else{
        echo "<script>alert('Event cannot be deleted');</script>";
    }
}
//search
$search = "";
if(isset($_GET['search'])){
    $search = $_GET['search'];
    $sql = "SELECT * FROM events where evCode LIKE '%$search%' or evName LIKE '%$search%' or
    evDate LIKE '%$search%' or evVenue LIKE '%$search%' or evRFee LIKE '%$search%'";
    $query = mysqli_query($conn, $sql);
}
else{
    $sql = "SELECT * FROM events";
}
$query = mysqli_query($conn, $sql);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="#" method="get">
        <input type="search" name="search" placeholder="Search Event">
        <input type="submit" value="search">
    </form>
    <form action="#" method="post">
        <input type="text" name="evCode" placeholder="Event Code" required>
        <input type="text" name="evName" placeholder="Event Name" required>
        <input type="date" name="evDate" required>
        <input type="text" name="evVenue" placeholder="Event Venue" required>
        <input type="text" name="evRFee" placeholder="Event Fee" required>
        <input type="submit" name="add" value="Add Event">
    </form>
    <table>
        <tr>
            <th>Event Code</th>
            <th>Event Name</th>
            <th>Event Date</th>
            <th>Event Venue</th>
            <th>Event Fee</th>
        </tr>
        <?php while($row = mysqli_fetch_assoc($query)):?>
            <tr>
                <td><?= $row['evCode']?></td>
                <td><?= $row['evName']?></td>
                <td><?= $row['evDate']?></td>
                <td><?= $row['evVenue']?></td>
                <td><?= $row['evRFee']?></td>
                <td>
                    <form action="events-edit.php" method="post">
                        <input type="hidden" name="evCode" value="<?= $row['evCode']?>">
                        <input type="hidden" name="evName" value="<?= $row['evName']?>">
                        <input type="hidden" name="evDate" value="<?= $row['evDate']?>">
                        <input type="hidden" name="evVenue" value="<?= $row['evVenue']?>">
                        <input type="hidden" name="evRFee" value="<?= $row['evRFee']?>">
                        <input type="submit" value="Edit">
                    </form>
                </td>
                <td>
                    <form action="#" method="post">
                        <input type="hidden" name="evCode" value="<?= $row['evCode']?> ">
                        <input type="submit" name="delete" value="Delete">
                    </form>
                </td>
            </tr>
        <?php endwhile;?>
    </table>
</body>
</html>
<!-- edit
<?php
include('config.php');
if(isset($_POST['edit'])){
    $evCode = $_POST['evCode'];
    $evName = $_POST['evName'];
    $evDate = $_POST['evDate'];
    $evVenue = $_POST['evVenue'];
    $evRFee = $_POST['evRFee'];
    
    $sql = "UPDATE `events` SET `evName`='$evName',`evDate`='$evDate',`evVenue`='$evVenue',`evRFee`='$evRFee' WHERE evCode = '$evCode'";
    $query = mysqli_query($conn, $sql);

    if($query){
        echo "<script>alert('Event Successfully updated');</script>";
    }
    else{
        echo "<script>alert('Event update failed');</script>";
    }
}
$evCode = $_POST['evCode'];
$evName = $_POST['evName'];
$evDate = $_POST['evDate'];
$evVenue = $_POST['evVenue'];
$evRFee = $_POST['evRFee'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form action="#" method="post">
        <input type="text" name="evCode" placeholder="Event Code" value="<?= $evCode ?>"required>
        <input type="text" name="evName" placeholder="Event Name" value="<?= $evName ?>"required>
        <input type="date" name="evDate" value="<?= $evDate ?>"required>
        <input type="text" name="evVenue" placeholder="Event Venue" value="<?= $evVenue ?>"required>
        <input type="text" name="evRFee" placeholder="Event Fee" value="<?= $evRFee ?>"required>
        <input type="submit" name="edit" value="Edit Event">
    </form>
</body>
</html> -->
<!-- participants 
 <?php
include('config.php');

if(isset($_POST['add'])){
    $evCode = $_POST['evCode'];
    $partFName = $_POST['partFName'];
    $partLName = $_POST['partLName'];
    $partDRate = $_POST['partDRate'];

    $check = mysqli_query($conn, "SELECT * FROM events where evCode = '$evCode'");
    if(mysqli_num_rows($check) > 0) {
        $sql = "INSERT INTO participants (evCode, partFName, partLName, partDRate)
        VALUES ('$evCode','$partFName','$partLName','$partDRate')";
        $query = mysqli_query($conn, $sql);
        if($query){
            echo "<script>alert('Participant Successfully added');</script>";
        }
        else{
            echo "<script>alert('Participant cannot be added');</script>";

        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post">
        <input type="text" name="evCode" placeholder="Event Code" required>
        <input type="text" name="partFName" placeholder="First Name" required>
        <input type="text" name="partLName" placeholder="Last Name" required>
        <input type="text" name="partDRate" placeholder="Discount Rate" required>
        <input type="submit" name="add" value="Add Participant">
    </form>
</body>
</html> -->
<!-- inner join
 <?php
include 'db.php'; // your DB connection

$sql = "
    SELECT r.regCode, r.regDate, r.regFPaid, r.regPMode,
           p.partFName, p.partLName,
           e.evName, e.evDate, e.evRFee
    FROM registration r
    INNER JOIN participants p ON r.partID = p.partID
    INNER JOIN events e ON p.evCode = e.evCode
    ORDER BY r.regDate DESC
";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table border='1'>
        <tr>
            <th>Event Name</th>
            <th>Participant</th>
            <th>Event Date</th>
            <th>Registration Date</th>
            <th>Fee Paid</th>
            <th>Payment Mode</th>
        </tr>";
    
    while ($row = $result->fetch_assoc()) {
        echo "<tr>
            <td>{$row['evName']}</td>
            <td>{$row['partFName']} {$row['partLName']}</td>
            <td>{$row['evDate']}</td>
            <td>{$row['regDate']}</td>
            <td>₱{$row['regFPaid']}</td>
            <td>{$row['regPMode']}</td>
        </tr>";
    }

    echo "</table>";
} else {
    echo "No registration records found.";
}

$conn->close();
?> -->
`;

export const PROJECTS = [
  {
    title: "Pharmacy Website",
    image: project1,
    description:
      "A fully functional pharmacy website with features like product listing, shopping cart.",
    technologies: ["HTML", "CSS", "Php", "Mysql"]
  },
    {
      title: "Bookstore Website",
      image: project4,
      description:
        "A user-friendly bookstore website designed for browsing, purchasing, and managing books.",
        technologies: ["HTML", "CSS", "Php", "Mysql"]
      },
      {
        title: "CCS Sit-in Monitoring Website",
        image: project5,
        description:
          "A sit-in monitoring website designed for students who want to reserve and use the lab ahead of time, featuring reservation functionality.",
        technologies: ["HTML", "CSS", "PHP", "MySQL"]
      },
      {
        title: "Portfolio Website",
        image: project3,
        description:
          "A personal portfolio website showcasing projects, skills, and contact information.",
          technologies: ["React", "Tailwind CSS", "Vite", "JavaScript", "Node.js", "PostCSS"]
        },
      {
        title: "Wast.ed App ",
        image: project2,
        description:
          "A mobile application for waste collection and segregation",
        technologies: ["React Native", "Nativewind", "Node.js", "Firebase"],
      },
];

export const CONTACT = {
  address: "49-3 Tres De Abril Sanciangko Street, Cebu City",
  phoneNo: "+63 9158906187",
  email: "rdpons123@gmail.com",
};
