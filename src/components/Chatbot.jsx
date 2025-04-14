import { BubbleChat } from 'flowise-embed-react';

const Chatbot = () => {
  return (
    <BubbleChat
            chatflowid: "6690bfb1-6f4b-49aa-b4d1-134e107de62b",
            apiHost: "https://ponsica-ponsica.hf.space",
            chatflowConfig: {},
            observersConfig: {},
            theme={{
                button: {
                    backgroundColor: "#3B81F6",
                    right: 20,
                    bottom: 20,
                    size: 48, // small | medium | large | number
                    dragAndDrop: true,
                    iconColor: "white",
                    customIconSrc: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
                    autoWindowOpen: {
                        autoOpen: true, //parameter to control automatic window opening
                        openDelay: 2, // Optional parameter for delay time in seconds
                        autoOpenOnMobile: false, //parameter to control automatic window opening in mobile
                        },
                },
                chatWindow: {
                    showTitle: true,
                    title: 'Chat Bot',
                    titleAvatarSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
                    showAgentMessages: true,
                    welcomeMessage: '<?php
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
',
                    errorMessage: 'This is a custom error message',
                    backgroundColor: "#ffffff",
                    backgroundImage: 'enter image path or link', // If set, this will overlap the background color of the chat window.
                    height: 700,
                    width: 400,
                    fontSize: 16,
                    //starterPrompts: ['What is a bot?', 'Who are you?'], // It overrides the starter prompts set by the chat flow passed
                    starterPromptFontSize: 15,
                    clearChatOnReload: false, // If set to true, the chat will be cleared when the page reloads.
                    botMessage: {
                        backgroundColor: "#f7f8ff",
                        textColor: "#303235",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
                    },
                    userMessage: {
                        backgroundColor: "#3B81F6",
                        textColor: "#ffffff",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                    },
                    textInput: {
                        placeholder: 'Type your question',
                        backgroundColor: '#ffffff',
                        textColor: '#303235',
                        sendButtonColor: '#3B81F6',
                        maxChars: 50,
                        maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 50 characters.',
                        autoFocus: true, // If not used, autofocus is disabled on mobile and enabled on desktop. true enables it on both, false disables it on both.
                        sendMessageSound: true,
                        // sendSoundLocation: "send_message.mp3", // If this is not used, the default sound effect will be played if sendSoundMessage is true.
                        receiveMessageSound: true,
                        // receiveSoundLocation: "receive_message.mp3", // If this is not used, the default sound effect will be played if receiveSoundMessage is true.
                    },
                    feedback: {
                        color: '#303235',
                    },
                    footer: {
                        textColor: '#303235',
                        text: 'Created by',
                        company: 'Rhodney Dame N. Ponsica',
                        companyLink: 'https://ardii.vercel.app',
                    }
                }
            }}
        />    
    );
}

export default Chatbot;
