<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <div>
        <?php
            $x = 5985;
            var_dump($x);
            echo "<br>";
            $x = -345; // negative number
            var_dump($x);
            echo "<br>";
            $x = 0x8C; // hexadecimal number
            var_dump($x);
            echo "<br>";
            $x = 047; // octal number
            var_dump($x);
            $cars=array("Volvo","BMW","Toyota");
            var_dump($cars);

            $x="Hello world!";
            $x=null;
            var_dump($x);

//        php对象
            class Car
            {
                var $color;
                function Car($color="green") {
                    $this->color = $color;
                }
                function what_color() {
                    return $this->color;
                }
            }

//        设置常量，使用 define() 函数
//            define(string constant_name, mixed value, case_sensitive = true)

            define("GREETING", "Welcome to w3cschool.cn!",true);
            echo GREETING;

//            字符串连接
            $txt1="Hello world!";
            $txt2="What a nice day!";
            echo $txt1 . " " . $txt2;

//        strlen() 函数返回字符串的长度（字符数）。
            echo strlen("Hello world!");
           echo "<br>";

        $t=date("H");
        if ($t<"20")
        {
            echo "Have a good day!";
        }

        echo "<br>";

        $t=date("H");
        echo $t;
        if ($t<"8")
        {
            echo "Have a good day!";
        }
        else
        {
            echo "Have a good night!";
        }

        echo "<br>";

        $x = 75;
        $y = 25;

        function addition()
        {
            $GLOBALS['z'] = $GLOBALS['x'] + $GLOBALS['y'];
        }

        addition();
        echo $z;
        echo "<br>";
        echo $_SERVER['PHP_SELF'];
        echo "<br>";
        echo $_SERVER['SERVER_NAME'];
        echo "<br>";
        echo $_SERVER['HTTP_HOST'];
        echo "<br>";
        echo $_SERVER['HTTP_REFERER'];
        echo "<br>";
        echo $_SERVER['HTTP_USER_AGENT'];
        echo "<br>";
        echo $_SERVER['SCRIPT_NAME'];
        echo "<br>";

        echo date("Y/m/d") . "<br>";
        echo date("Y.m.d") . "<br>";
        echo date("Y-m-d");

        ?>

        <form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
            Name: <input type="text" name="fname">
            <input type="submit">
        </form>

        <?php
        $name = $_REQUEST['fname'];
        echo $name;
        ?>

    </div>
</body>
</html>