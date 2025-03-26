let fullName;// undefined
let age;    // undefined
while (true) {
    let choose= prompt(`
            Lựa chọn 1: Nhập tên của người dùng.
            Lựa chọn 2: Nhập tuổi của người dùng.
            Lựa chọn 3: In tên và tuổi của người dùng.
            Lựa chọn 4: In bảng cửu chương của một số.
            Lựa chọn 5: Kiểm tra số nhập vào là số chẵn hay lẻ.
            Lựa chọn 6: Tính tổng các số từ 1 đến N (N do người dùng nhập).
            Lựa chọn 7: In các số trong một dãy (người dùng nhập dãy số).
            Lựa chọn 8: Kiểm tra số nhập vào có phải là số nguyên tố hay không.
            Lựa chọn 9: In chuỗi đảo ngược của một chuỗi mà người dùng nhập.
            Lựa chọn 10: Thoát khỏi chương trình.
        `)
    if(choose==1){
        fullName= prompt("mời nhập tên");// lê minh thu
    }else if(choose==2){
       age=Number(prompt("nhập tuổi"));// 31
    }else if(choose==3){
        console.log(`tên: ${fullName}, tuổi : ${age}`);
    }else if(choose==4){
        console.log("in bảng cửu chương");
        // let number= prompt("mời bạn nhập bảng cửu chương");
        for (let i = 1; i <=10; i++) {
            // console.log(`${number} X ${i}= ${number*i}`);
            document.write(`8 X ${i}= ${8*i}`);
            document.write("</br>");
        }
        for (let i = 1; i <=10; i++) {
            // console.log(`${number} X ${i}= ${number*i}`);
            document.write(`9 X ${i}= ${9*i}`);
            document.write("</br>");
        }
        
    }else if(choose==5){
        let number= prompt("nhập số cần kiểm tra");
        if(number%2==0){
            console.log(`${number} là số chẵn`);
        }else{
            console.log("là số lẻ ");
        }
    }else if(choose==6){
        let sum=0;
        let number= prompt("mời nhập số bất kì");
        for (let i = 1; i <= number; i++) {
            // sum+=i;
            sum= sum+i;
        }
        console.log(`tổng từ 1 đến ${number} là: ${sum}`);
        
    }else if(choose==8){
        // kiểm tra số nguyên tố
        let number= prompt("mời nhập số cần kiểm tra");
        let count=0;
        for (let i = 1; i <= number; i++) {
            if(number%i==0){
                count++;
            }
        }
        if(count== 2){
            console.log(`${number }là số nguyên tố`);
            
        }else{
            console.log(`${number} không phải số nguyên tố`);
            
        }
    }
    else if(choose==10){
        break;
        // thoát chương trình
    }
}